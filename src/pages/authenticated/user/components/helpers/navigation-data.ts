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
		to: _path(ROUTES.user, "getting-started"),
		icon: Icons.Tasks,
	},
	CALENDAR: {
		id: 980928034802934,
		name: "Calendar",
		to: _path(ROUTES.user, "calendar"),
		icon: Icons.Calendar,
	},
	COMMUNITY: {
		id: 2394290340234,
		name: "Community",
		to: _path(ROUTES.user, "dashboard"),
		icon: Icons.Community,
	},
	TIME_OFF: {
		id: 23422,
		name: "Time Off",
		to: _path(ROUTES.user, "time-off"),
		icon: Icons.TimeOff,
	},
	AUTOMATIONS: {
		id: 120938012876,
		name: "Automations",
		icon: Icons.Flow,
		to: "/projects/archived",
	},
};

export const NAVIGATIONd = [
	{
		id: 2333,
		name: "Tasks",
		active: false,
		to: "/my-work",
		icon: Icons.Tasks,
	},
	{
		id: 22223333332,
		name: "Notes",
		to: "/issues",
		active: false,
		icon: Icons.Notes,
	},
	{
		id: 23422,
		name: "Active sprint",
		to: "projects",
		active: false,
		icon: Icons.Project,
	},
	{
		id: 2394290340234,
		name: "Reports",
		active: false,
		to: "/projects/current",
		icon: Icons.Reports,
	},
	{
		id: 120938012876,
		name: "Automations",
		active: false,
		icon: Icons.Flow,
		to: "/projects/archived",
	},
];
