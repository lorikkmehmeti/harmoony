import { AuthRoutes } from "@/pages/auth/routes";
import { Dashboard } from "@/pages/dashboard/dashboard.tsx";
import Landing from "@/pages/landing/landing.tsx";
import ProtectedRoute from "@/routes/ProtectedRoute.tsx";
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
					path: "/dashboard",
					element: <ProtectedRoute children={<Dashboard />} />,
				},
			],
		},
		{
			path: "*",
			element: <div>Not found</div>,
		},
	],
	{ basename: "/" },
);
