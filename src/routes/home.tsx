import { FileRoute, Outlet } from "@tanstack/react-router";

export const Route = new FileRoute("/home").createRoute({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div>
			<Outlet />
		</div>
	);
}
