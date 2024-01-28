import { SessionContext } from "@/lib/providers/SessionContext.tsx";
import { useContext } from "react";

export const useSession = () => {
	const context = useContext(SessionContext);
	if (context === undefined) {
		throw new Error(`useSession must be used within a SessionContextProvider.`);
	}

	return context.session;
};
