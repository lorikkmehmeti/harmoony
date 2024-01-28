import Landing from "@/pages/landing/Landing.tsx";
import { AuthenticationPage } from "@/pages/login/Login.tsx";
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
			],
		},
		{
			path: "*",
			element: <div>Not found</div>,
		},
	],
	{ basename: "/" },
);
