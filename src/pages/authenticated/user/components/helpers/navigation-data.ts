import { ROUTES } from "@/lib/constants/routes.ts";
import { _path } from "@/lib/utils.ts";
import { Icons } from "@/pages/authenticated/components/sidebar/icons/sidebar-icons.tsx";
import React from "react";

interface NavigationItem {
	id: number;
	name: string;
	to: string;
	icon?: React.ReactNode;
}

interface Navigation {
	[key: string]: NavigationItem;
}

export const NAVIGATION: Navigation = {
	ON_BOARDING: {
		id: 29387498234,
		name: "Getting started",
		to: _path(ROUTES.user, ROUTES.onboarding),
		icon: Icons.Tasks,
	},
	CALENDAR: {
		id: 980928034802934,
		name: "Calendar",
		to: _path(ROUTES.user, ROUTES.calendar),
		icon: Icons.Calendar,
	},
	COMMUNITY: {
		id: 2394290340234,
		name: "Community",
		to: _path(ROUTES.user, ROUTES.community),
		icon: Icons.Community,
	},
	TIME_OFF: {
		id: 23422,
		name: "Time off",
		to: _path(ROUTES.user, ROUTES.time_off),
		icon: Icons.TimeOff,
	},
};

export const ORGANIZATION: Navigation = {
	PEOPLE: {
		id: 9847593495,
		name: "People",
		to: _path(ROUTES.user, ROUTES.people),
		icon: Icons.Group,
	},
	CLUB_VIEW: {
		id: 239809234,
		name: "Club View",
		to: _path(ROUTES.user),
		icon: Icons.Organizational,
	},
};
