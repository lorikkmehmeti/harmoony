import { SessionContext } from "@/lib/providers/SessionContext.tsx";
import { useContext } from "react";

export const useSessionContext = () => {
	const context = useContext(SessionContext);
	if (context === undefined) {
		throw new Error(
			`useSessionContext must be used within a SessionContextProvider.`,
		);
	}

	return context;
};
