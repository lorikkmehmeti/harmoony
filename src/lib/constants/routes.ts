export const ROUTES = {
	userLoggedIn: "u",
	auth: "g",
	user: "u",
	login: "login",
	register: "sign-up",
	dashboard: "dashboard",
} as const;

export type RoutesKeys = keyof typeof ROUTES;
