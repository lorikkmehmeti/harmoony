import { ROUTES } from "@/lib/constants/routes.ts";
import { useSessionContext } from "@/lib/hooks";
import { _path } from "@/lib/utils.ts";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const SOProtectedRoute = ({
	children,
	redirectTo,
}: {
	children: React.ReactNode;
	redirectTo?: string;
}) => {
	const location = useLocation();
	const { session, isLoading } = useSessionContext();

	if (isLoading) {
		return;
	}

	return !session ? (
		children
	) : (
		<Navigate
			to={redirectTo ?? _path(ROUTES.user, ROUTES.dashboard, location?.search)}
		/>
	);
};

export const SIProtectedRoute = ({
	children,
	redirectTo,
}: {
	children: React.ReactNode;
	redirectTo?: string;
}) => {
	const location = useLocation();
	const { session, isLoading } = useSessionContext();

	if (isLoading) {
		return;
	}

	return session ? (
		children
	) : (
		<Navigate
			to={redirectTo ?? _path(ROUTES.auth, ROUTES.login, location?.search)}
		/>
	);

	// console.log({ user });

	// if (routes === "loggedIn") {
	// 	return user ? (
	// 		children
	// 	) : (
	// 		<Navigate
	// 			to={redirectTo ?? _path(ROUTES.auth, ROUTES.login, location?.search)}
	// 		/>
	// 	);
	// }
	//
	// return !user ? (
	// 	children
	// ) : (
	// 	<Navigate to={redirectTo ?? _path(ROUTES.dashboard, location?.search)} />
	// );
};

// export default ProtectedRoute;
