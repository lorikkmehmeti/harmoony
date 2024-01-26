import { Router, RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routeTree.gen";

const router = new Router({
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	defaultStaleTime: 5000,
	routeTree,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export default function App() {
	return <RouterProvider router={router} />;
}
