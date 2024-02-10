import { EmptyState } from "@/components/empty-state/empty-state.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { Menu } from "@/pages/dashboard/components/menu/menu.tsx";
import { NAVIGATION } from "@/pages/dashboard/components/sidebar/helpers/navigation-data.ts";
import {
	CameraIcon,
	DocumentIcon,
	RecordIcon,
	TeamCloudIcon,
	TimesheetIcon,
	TrashIcon,
} from "@/pages/dashboard/components/sidebar/icons/icons.ts";
import { Icons } from "@/pages/dashboard/components/sidebar/icons/sidebar-icons.tsx";
import {
	MenuItem,
	Submenu,
} from "@/pages/dashboard/components/sidebar/menu-item.tsx";
import { ScrollAreaViewport } from "@radix-ui/react-scroll-area";
import { memo, useId } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const Sidebar = memo(function Sidebar() {
	const { pathname, state } = useLocation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const open = searchParams.get("open");

	console.log(state?.open, open);
	return (
		<ScrollArea className="h-full">
			<ScrollAreaViewport className="h-full px-2 py-1">
				<ul className="mt-0">
					<Menu>
						<Menu.Item>
							<Menu.NavLink to="dashboard">
								<Menu.Icon>{Icons.Flow}</Menu.Icon>
								<Menu.Title>Title</Menu.Title>
								<Menu.KeyboardSlot keyboardKey="⌘K" />
							</Menu.NavLink>
						</Menu.Item>
					</Menu>
					<Menu>
						<Menu.Item>
							<Menu.Button>
								<Menu.Icon>{Icons.Flow}</Menu.Icon>
								<Menu.Title>Title</Menu.Title>
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
								<Menu.PopoverTrigger classNames="w-full group">
									<Menu.Link
										to={`?open=notifications`}
										state={{ open: "notifications" }}
										preventScrollReset={true}>
										<Menu.Button classNames="group-data-[state=open]:bg-medium dark:group-data-[state=open]:bg-light group-data-[state=open]:border group-data-[state=open]:border-input dark:group-data-[state=open]:border-transparent">
											<Menu.Icon>{Icons.Inbox}</Menu.Icon>
											<Menu.Title>Inbox</Menu.Title>
											<Menu.KeyboardSlot keyboardKey="⌘K" />
										</Menu.Button>
									</Menu.Link>
								</Menu.PopoverTrigger>
								<Menu.PopoverContent side="right">
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
					{NAVIGATION &&
						NAVIGATION.map((link) => (
							<li
								className="my-[1px]"
								key={useId()}>
								<MenuItem
									type="button"
									item={link}
								/>
								{/*<MenuTrigger.Link></MenuTrigger.Link>*/}
								{/*<MenuTrigger.Button></MenuTrigger.Button>*/}
								{/*<MenuTrigger.Popover></MenuTrigger.Popover>*/}
								{/*<MenuTrigger.Dialog></MenuTrigger.Dialog>*/}
							</li>
						))}
				</ul>

				<Submenu
					item={{
						id: 293489234,
						name: "Cloud",
						onClick: () => {},
						children: [
							{
								id: 9798234,
								name: "Team Cloud",
								icon: <TeamCloudIcon />,
								to: "archived",
							},
							{
								id: 894856945,
								name: "Space Recordings",
								icon: <RecordIcon />,
								onClick: () => {
									console.log("hmmmmmmm");
								},
							},
							{
								id: 2342345555,
								name: "Space Snapshots",
								icon: <CameraIcon />,
								to: "archived",
							},
							{
								id: 398475,
								name: "Trash",
								icon: <TrashIcon />,
								to: "archived",
							},
						],
					}}
				/>

				<Submenu
					opened={true}
					item={{
						id: 293489234,
						name: "Time Tracking",
						onClick: () => {},
						children: [
							{
								id: 9798234,
								name: "Documents",
								icon: <DocumentIcon />,
								to: "archived",
							},
							{
								id: 894856945,
								name: "Timesheet",
								icon: <TimesheetIcon />,
								to: "archived",
							},
						],
					}}
				/>
			</ScrollAreaViewport>
		</ScrollArea>
	);
});
