export const ROUTES = {
	userLoggedIn: "u",
	auth: "g",
	login: "login",
	register: "sign-up",
	dashboard: "dashboard",
} as const;

export type RoutesKeys = keyof typeof ROUTES;
