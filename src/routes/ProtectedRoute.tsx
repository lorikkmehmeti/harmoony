import { useUser } from "@/lib/hooks";
import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({
	children,
	loggedInRoutes = true,
	redirectTo,
}: {
	children: React.ReactNode;
	redirectTo?: string;
	loggedInRoutes?: boolean;
}) => {
	const user = useUser();

	if (loggedInRoutes) {
		return user ? children : <Navigate to={redirectTo ?? "/login"} />;
	}

	return !user ? children : <Navigate to={redirectTo ?? "/dashboard"} />;
};

export default ProtectedRoute;
