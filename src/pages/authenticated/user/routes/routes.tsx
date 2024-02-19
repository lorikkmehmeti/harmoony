import { ROUTES } from "@/lib/constants/routes.ts";
import UserLayout from "@/pages/authenticated/user/layout.tsx";
import { SIProtectedRoute } from "@/routes/ProtectedRoute.tsx";
import { RouteObject } from "react-router-dom";

export const UserRoutes: RouteObject[] = [
	{
		path: ROUTES.user,
		element: (
			<SIProtectedRoute>
				<UserLayout />
			</SIProtectedRoute>
		),
		children: [
			{
				path: ROUTES.dashboard,
				element: <div>1231982739123</div>,
				loader: () => {
					return (document.title = "Dashboard - Harmoony");
				},
			},
		],
	},
];
