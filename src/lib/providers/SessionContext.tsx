import { AuthError, Session, SupabaseClient } from "@supabase/supabase-js";
import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { redirect } from "react-router-dom";

export type SessionContext =
	| {
			isLoading: true;
			session: null;
			error: null;
			supabaseClient: SupabaseClient;
	  }
	| {
			isLoading: false;
			session: Session;
			error: null;
			supabaseClient: SupabaseClient;
	  }
	| {
			isLoading: false;
			session: null;
			error: AuthError;
			supabaseClient: SupabaseClient;
	  }
	| {
			isLoading: false;
			session: null;
			error: null;
			supabaseClient: SupabaseClient;
	  };

const SessionContext = createContext<SessionContext>({
	isLoading: true,
	session: null,
	error: null,
	supabaseClient: {} as never,
});

export interface SessionContextProviderProps {
	supabaseClient: SupabaseClient;
	initialSession?: Session | null;
}

export const SessionContextProvider = ({
	supabaseClient,
	children,
}: PropsWithChildren<SessionContextProviderProps>) => {
	const [session, setSession] = useState<Session | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<AuthError>();

	useEffect(() => {
		setSession(session);
	}, [session]);

	useEffect(() => {
		let mounted = true;

		async function getSession() {
			const {
				data: { session },
				error,
			} = await supabaseClient.auth.getSession();

			if (mounted) {
				if (error) {
					setError(error);
					setIsLoading(false);
					return;
				}

				setSession(session);
				setIsLoading(false);
			}
		}

		getSession().then();

		return () => {
			mounted = false;
		};
	}, []);

	useEffect(() => {
		const {
			data: { subscription },
		} = supabaseClient.auth.onAuthStateChange((event, _session) => {
			if (session?.user.id !== _session?.user.id) return;
			switch (event) {
				case "SIGNED_IN":
				case "USER_UPDATED":
					setSession(_session);
					setIsLoading(false);
					break;
				case "SIGNED_OUT":
					setSession(null);
					setIsLoading(false);
					redirect("/login");
					break;

				default:
					break;
			}
		});

		return () => {
			subscription?.unsubscribe();
		};
	}, []);

	const value: SessionContext = useMemo(() => {
		if (isLoading) {
			return {
				isLoading: true,
				session: null,
				error: null,
				supabaseClient,
			};
		}

		if (error) {
			return {
				isLoading: false,
				session: null,
				error,
				supabaseClient,
			};
		}

		return {
			isLoading: false,
			session,
			error: null,
			supabaseClient,
		};
	}, [isLoading, session, error]);

	return (
		<SessionContext.Provider value={value}>{children}</SessionContext.Provider>
	);
};

export const useSessionContext = () => {
	const context = useContext(SessionContext);
	if (context === undefined) {
		throw new Error(
			`useSessionContext must be used within a SessionContextProvider.`,
		);
	}

	return context;
};

export const useAuthContext = () => {
	const { supabaseClient } = useContext(SessionContext);
	if (supabaseClient === undefined) {
		throw new Error(
			`useAuthContext must be used within a SessionContextProvider.`,
		);
	}

	return supabaseClient.auth;
};

export function useSupabaseClient<
	Database = never,
	SchemaName extends string & keyof Database = "public" extends keyof Database
		? "public"
		: string & keyof Database,
>() {
	const context = useContext(SessionContext);
	if (context === undefined) {
		throw new Error(
			`useSupabaseClient must be used within a SessionContextProvider.`,
		);
	}

	return context.supabaseClient as SupabaseClient<Database, SchemaName>;
}

export const useSession = () => {
	const context = useContext(SessionContext);
	if (context === undefined) {
		throw new Error(`useSession must be used within a SessionContextProvider.`);
	}

	return context.session;
};

export const useUser = () => {
	const context = useContext(SessionContext);
	if (context === undefined) {
		throw new Error(`useUser must be used within a SessionContextProvider.`);
	}

	return context.session?.user ?? null;
};
