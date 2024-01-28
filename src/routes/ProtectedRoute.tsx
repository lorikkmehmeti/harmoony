import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({
	children,
	redirectTo,
}: {
	children: React.ReactNode;
	redirectTo?: string;
}) => {
	const isAuthenticated = true;
	return isAuthenticated ? children : <Navigate to={redirectTo ?? "/login"} />;
};

export default ProtectedRoute;
