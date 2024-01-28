import { Dashboard } from "@/pages/Dashboard/Dashboard.tsx";
import Landing from "@/pages/landing/Landing.tsx";
import { AuthenticationPage } from "@/pages/login/Login.tsx";
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
				{
					path: "/login",
					element: (
						<ProtectedRoute
							children={<AuthenticationPage />}
							loggedInRoutes={false}
						/>
					),
				},
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
