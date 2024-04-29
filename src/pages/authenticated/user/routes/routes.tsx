import { ROUTES } from "@/lib/constants/routes.ts";
import UserLayout from "@/pages/authenticated/user/layout.tsx";
import { Onboarding } from "@/pages/authenticated/user/onboarding";
import { SIProtectedRoute } from "@/routes/ProtectedRoute.tsx";
import { Navigate, RouteObject } from "react-router-dom";

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
				path: "",
				element: <Navigate to={ROUTES.dashboard} />,
			},
			{
				path: ROUTES.dashboard,
				element: <div>1231982739123</div>,
			},
			{
				path: ROUTES.onboarding,
				element: <Onboarding />,
			},
			{
				path: ROUTES.time_off,
				element: (
					<div className="p-3">
						<h1>Time off</h1>
					</div>
				),
			},
			{
				path: ROUTES.calendar,
				element: (
					<div className="p-3">
						<h1>Calendar</h1>
					</div>
				),
			},
			{
				path: ROUTES.community,
				element: (
					<div className="p-3">
						<h1>community</h1>
					</div>
				),
			},
			{
				path: ROUTES.people,
				element: (
					<div className="p-3">
						<h1>People</h1>
					</div>
				),
			},
		],
	},
];
