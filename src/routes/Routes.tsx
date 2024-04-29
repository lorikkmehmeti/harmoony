import { ROUTES } from "@/lib/constants/routes.ts";
import { AuthRoutes } from "@/pages/auth/routes";
import { Dashboard } from "@/pages/authenticated/dashboard/dashboard.tsx";
import { UserRoutes } from "@/pages/authenticated/user/routes/routes.tsx";
import Landing from "@/pages/landing/landing.tsx";
import { SIProtectedRoute } from "@/routes/ProtectedRoute.tsx";
import { createBrowserRouter, Outlet } from "react-router-dom";

export const routerRoutes = createBrowserRouter(
	[
		{
			path: "/",
			element: <Outlet />,
			children: [
				{
					path: "/",
					element: <Landing />,
				},
				...AuthRoutes,
				{
					path: ROUTES.dashboard,
					element: (
						<SIProtectedRoute>
							<Dashboard />
						</SIProtectedRoute>
					),
				},
				...UserRoutes,
			],
		},
		{
			path: "*",
			element: <div>Not found</div>,
		},
	],
	{ basename: "/" },
);
