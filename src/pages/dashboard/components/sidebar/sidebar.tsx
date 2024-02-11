import { EmptyState } from "@/components/empty-state/empty-state.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { Menu } from "@/pages/dashboard/components/menu/menu.tsx";
import { Icons } from "@/pages/dashboard/components/sidebar/icons/sidebar-icons.tsx";
// import {
// 	Submenu,
// } from "@/pages/dashboard/components/sidebar/menu-item.tsx";
import { NAVIGATION } from "@/pages/dashboard/components/sidebar/helpers/navigation-data.ts";
import { ScrollAreaViewport } from "@radix-ui/react-scroll-area";
import { memo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const Sidebar = memo(function Sidebar() {
	const { pathname, state } = useLocation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const open = searchParams.get("open");
	return (
		<ScrollArea className="h-full">
			<ScrollAreaViewport className="h-full px-2 py-1">
				<ul className="mt-0">
					<Menu>
						<Menu.Item>
							<Menu.NavLink to={NAVIGATION["TASKS"].to}>
								<Menu.Icon>{NAVIGATION["TASKS"].icon}</Menu.Icon>
								<Menu.Title>{NAVIGATION["TASKS"].name}</Menu.Title>
							</Menu.NavLink>
						</Menu.Item>
						<Menu.Item>
							<Menu.NavLink to={NAVIGATION["NOTES"].to}>
								<Menu.Icon>{NAVIGATION["NOTES"].icon}</Menu.Icon>
								<Menu.Title>{NAVIGATION["NOTES"].name}</Menu.Title>
							</Menu.NavLink>
						</Menu.Item>
						<Menu.Item>
							<Menu.NavLink to={NAVIGATION["SPRINT"].to}>
								<Menu.Icon>{NAVIGATION["SPRINT"].icon}</Menu.Icon>
								<Menu.Title>{NAVIGATION["SPRINT"].name}</Menu.Title>
							</Menu.NavLink>
						</Menu.Item>
						<Menu.Item>
							<Menu.NavLink to={NAVIGATION["REPORTS"].to}>
								<Menu.Icon>{NAVIGATION["REPORTS"].icon}</Menu.Icon>
								<Menu.Title>{NAVIGATION["REPORTS"].name}</Menu.Title>
							</Menu.NavLink>
						</Menu.Item>
						<Menu.Item>
							<Menu.NavLink to={NAVIGATION["AUTOMATIONS"].to}>
								<Menu.Icon>{NAVIGATION["AUTOMATIONS"].icon}</Menu.Icon>
								<Menu.Title>{NAVIGATION["AUTOMATIONS"].name}</Menu.Title>
							</Menu.NavLink>
						</Menu.Item>
					</Menu>
					<Menu>
						<Menu.Item>
							<Menu.Button>
								<Menu.Icon>{Icons.TeamCloud}</Menu.Icon>
								<Menu.Title>Flow</Menu.Title>
								<Menu.KeyboardSlot keyboardKey="⌘K" />
							</Menu.Button>
						</Menu.Item>
					</Menu>
					<Menu>
						<Menu.Item>
							<Menu.Popover
								open={
									state?.open === "notifications" || open === "notifications"
								}
								onOpenChange={(event) => {
									if (!event) {
										navigate(pathname);
									}
								}}>
								<Menu.PopoverTrigger className="group w-full">
									<Menu.Link
										to={`?open=notifications`}
										state={{ open: "notifications" }}
										preventScrollReset={true}>
										<Menu.Button className="group-data-[state=open]:border group-data-[state=open]:border-input group-data-[state=open]:bg-medium dark:group-data-[state=open]:border-transparent dark:group-data-[state=open]:bg-light">
											<Menu.Icon>{Icons.Inbox}</Menu.Icon>
											<Menu.Title>Inbox</Menu.Title>
											<Menu.KeyboardSlot keyboardKey="⌘N" />
										</Menu.Button>
									</Menu.Link>
								</Menu.PopoverTrigger>
								<Menu.PopoverContent side="right">
									{/*TODO refactor this to a new component*/}
									<Tabs
										defaultValue="unread-notifications"
										className="w-full">
										<h4 className="p-2 pb-3 text-lg font-semibold text-black dark:text-white">
											Notifications
										</h4>
										<TabsList className="w-full border border-input">
											<TabsTrigger
												value="unread-notifications"
												className="h-[32px] flex-1 border border-accent py-0.5 text-sm shadow-sm">
												Unread
											</TabsTrigger>
											<TabsTrigger
												value="all-notifications"
												className="h-[32px] flex-1 border border-accent py-0.5 text-sm shadow-sm">
												All
											</TabsTrigger>
										</TabsList>
										<TabsContent value="unread-notifications">
											<EmptyState
												title="You’re all up to date"
												description="There are no new notifications at the moment"
											/>
										</TabsContent>
										<TabsContent value="all-notifications">
											<EmptyState
												title="You’re all up to date"
												description="There are no new notifications at the moment"
											/>
										</TabsContent>
									</Tabs>
								</Menu.PopoverContent>
							</Menu.Popover>
						</Menu.Item>
					</Menu>
				</ul>

				{/*<Submenu*/}
				{/*	item={{*/}
				{/*		id: 293489234,*/}
				{/*		name: "Cloud",*/}
				{/*		onClick: () => {},*/}
				{/*		children: [*/}
				{/*			{*/}
				{/*				id: 9798234,*/}
				{/*				name: "Team Cloud",*/}
				{/*				icon: <TeamCloudIcon />,*/}
				{/*				to: "archived",*/}
				{/*			},*/}
				{/*			{*/}
				{/*				id: 894856945,*/}
				{/*				name: "Space Recordings",*/}
				{/*				icon: <RecordIcon />,*/}
				{/*				onClick: () => {},*/}
				{/*			},*/}
				{/*			{*/}
				{/*				id: 2342345555,*/}
				{/*				name: "Space Snapshots",*/}
				{/*				icon: <CameraIcon />,*/}
				{/*				to: "archived",*/}
				{/*			},*/}
				{/*			{*/}
				{/*				id: 398475,*/}
				{/*				name: "Trash",*/}
				{/*				icon: <TrashIcon />,*/}
				{/*				to: "archived",*/}
				{/*			},*/}
				{/*		],*/}
				{/*	}}*/}
				{/*/>*/}

				{/*<Submenu*/}
				{/*	opened={true}*/}
				{/*	item={{*/}
				{/*		id: 293489234,*/}
				{/*		name: "Time Tracking",*/}
				{/*		onClick: () => {},*/}
				{/*		children: [*/}
				{/*			{*/}
				{/*				id: 9798234,*/}
				{/*				name: "Documents",*/}
				{/*				icon: <DocumentIcon />,*/}
				{/*				to: "archived",*/}
				{/*			},*/}
				{/*			{*/}
				{/*				id: 894856945,*/}
				{/*				name: "Timesheet",*/}
				{/*				icon: <TimesheetIcon />,*/}
				{/*				to: "archived",*/}
				{/*			},*/}
				{/*		],*/}
				{/*	}}*/}
				{/*/>*/}
			</ScrollAreaViewport>
		</ScrollArea>
	);
});
