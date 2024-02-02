import { ROUTES } from "@/lib/constants/routes.ts";
import { useUser } from "@/lib/hooks";
import { _path } from "@/lib/utils.ts";
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
		return user ? (
			children
		) : (
			<Navigate to={redirectTo ?? _path(ROUTES.auth, ROUTES.login)} />
		);
	}

	return !user ? (
		children
	) : (
		<Navigate to={redirectTo ?? _path(ROUTES.dashboard)} />
	);
};

export default ProtectedRoute;
