import React from "react";

export const SOProtectedRoute = ({
	children,
	redirectTo,
}: {
	children: React.ReactNode;
	redirectTo?: string;
}) => {
	// const location = useLocation();
	// const { session, isLoading } = useSessionContext();

	// if (isLoading) {
	// 	return;
	// }

	return children;
};

export const SIProtectedRoute = ({
	children,
	redirectTo,
}: {
	children: React.ReactNode;
	redirectTo?: string;
}) => {
	// const location = useLocation();
	// const { session, isLoading } = useSessionContext();
	//
	// if (isLoading) {
	// 	return;
	// }

	return children;

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
