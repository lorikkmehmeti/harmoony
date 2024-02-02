export const ROUTES = {
	auth: "g",
	login: "login",
	register: "sign-up",
	dashboard: "dashboard",
} as const;

export type RoutesKeys = keyof typeof ROUTES;
