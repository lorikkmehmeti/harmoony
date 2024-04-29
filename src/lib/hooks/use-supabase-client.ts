import { SessionContext } from "@/lib/providers/SessionContext.tsx";
import { SupabaseClient } from "@supabase/supabase-js";
import { useContext } from "react";

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
