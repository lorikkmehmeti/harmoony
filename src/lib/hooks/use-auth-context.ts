import { SessionContext } from "@/lib/providers/SessionContext.tsx";
import { useContext } from "react";

export const useAuthContext = () => {
	const { supabaseClient } = useContext(SessionContext);
	if (supabaseClient === undefined) {
		throw new Error(
			`useAuthContext must be used within a SessionContextProvider.`,
		);
	}

	return supabaseClient.auth;
};
