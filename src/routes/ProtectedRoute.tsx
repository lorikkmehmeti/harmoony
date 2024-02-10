import { ROUTES } from "@/lib/constants/routes.ts";
import { useUser } from "@/lib/hooks";
import { _path } from "@/lib/utils.ts";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({
	children,
	routes = "loggedIn",
	redirectTo,
}: {
	children: React.ReactNode;
	redirectTo?: string;
	routes?: "loggedIn" | "loggedOut";
}) => {
	const user = useUser();
	const location = useLocation();

	if (routes === "loggedIn") {
		return user ? (
			children
		) : (
			<Navigate
				to={redirectTo ?? _path(ROUTES.auth, ROUTES.login, location?.search)}
			/>
		);
	}

	return !user ? (
		children
	) : (
		<Navigate to={redirectTo ?? _path(ROUTES.dashboard, location?.search)} />
	);
};

export default ProtectedRoute;
