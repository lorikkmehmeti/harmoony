import { AuthLayout } from "@/pages/auth/layout.tsx";
import { AuthenticationPage } from "@/pages/auth/login/login.tsx";
import { SignUpPage } from "@/pages/auth/sign-up/sign-up.tsx";
import ProtectedRoute from "@/routes/ProtectedRoute.tsx";
import { RouteObject } from "react-router-dom";

export const AuthRoutes: RouteObject[] = [
	{
		path: "g",
		element: (
			<ProtectedRoute
				children={<AuthLayout />}
				loggedInRoutes={false}
			/>
		),
		children: [
			{
				path: "login",
				element: <AuthenticationPage />,
			},
			{
				path: "sign-up",
				element: <SignUpPage />,
			},
		],
	},
];
