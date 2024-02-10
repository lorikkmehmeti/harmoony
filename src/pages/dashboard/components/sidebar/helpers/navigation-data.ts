import { Icons } from "@/pages/dashboard/components/sidebar/icons/sidebar-icons.tsx";

export const NAVIGATION = [
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
