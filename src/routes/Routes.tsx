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
					element: <AuthenticationPage />,
				},
				{
					path: "/dashboard",
					element: <ProtectedRoute children={<div>2394729384798237498</div>} />,
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
