import { ROUTES } from "@/lib/constants/routes.ts";
import { AuthLayout } from "@/pages/auth/layout.tsx";
import { AuthenticationPage } from "@/pages/auth/login/login.tsx";
import { SignUpPage } from "@/pages/auth/sign-up/sign-up.tsx";
import { SOProtectedRoute } from "@/routes/ProtectedRoute.tsx";
import { RouteObject } from "react-router-dom";

export const AuthRoutes: RouteObject[] = [
	{
		path: ROUTES.auth,
		element: <SOProtectedRoute children={<AuthLayout />} />,
		children: [
			{
				path: ROUTES.login,
				element: <AuthenticationPage />,
			},
			{
				path: ROUTES.register,
				element: <SignUpPage />,
			},
		],
	},
];
