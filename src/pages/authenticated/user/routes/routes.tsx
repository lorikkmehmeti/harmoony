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
			// TODO `BUG` fix navigate to not let user write only `u` in URL in this case (the same for other routes)
			// {
			// 	path: ROUTES.user,
			// 	element: (
			// 		<Navigate
			// 			to={ROUTES.dashboard}
			// 		/>
			// 	),
			// },
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
