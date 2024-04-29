export const ROUTES = {
	userLoggedIn: "u",
	auth: "g",
	user: "u",
	login: "login",
	register: "sign-up",
	dashboard: "dashboard",
	onboarding: "getting-started",
	calendar: "calendar",
	time_off: "time-off",
	community: "community",
	people: "people",
} as const;

export type RoutesKeys = keyof typeof ROUTES;
