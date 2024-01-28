import { SessionContext } from "@/lib/providers/SessionContext.tsx";
import { useContext } from "react";

export const useUser = () => {
	const context = useContext(SessionContext);
	if (context === undefined) {
		throw new Error(`useUser must be used within a SessionContextProvider.`);
	}

	return context.session?.user ?? null;
};
