import { EmptyState } from "@/components/empty-state/empty-state.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { Menu } from "@/pages/authenticated/components/menu/menu.tsx";
import { TimesheetIcon } from "@/pages/authenticated/components/sidebar/icons/icons.ts";
import { ChevronRight } from "@/pages/authenticated/components/sidebar/icons/icons.tsx";
import { Icons } from "@/pages/authenticated/components/sidebar/icons/sidebar-icons.tsx";
import { NAVIGATION } from "@/pages/authenticated/user/components/helpers/navigation-data.ts";
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
				<Menu>
					{(Object.keys(NAVIGATION) as (keyof typeof NAVIGATION)[]).map(
						(item) => {
							return (
								<Menu.Item>
									<Menu.NavLink to={NAVIGATION[item].to}>
										{NAVIGATION[item].icon ? (
											<Menu.Icon>{NAVIGATION[item].icon}</Menu.Icon>
										) : null}
										<Menu.Title>{NAVIGATION[item].name}</Menu.Title>
									</Menu.NavLink>
								</Menu.Item>
							);
						},
					)}
				</Menu>

				<Menu>
					<Menu.Submenu
						type="single"
						id="submenu-1"
						collapsible
						defaultValue={open?.length ? "submenu-1" : ""}>
						<Menu.SubMenuItem value="submenu-1">
							<Menu.SubmenuTrigger className="px-2">
								<ChevronRight className="mr-1 h-4 w-4 shrink-0 transition-transform duration-200" />
								<Menu.SubmenuTitle>Time tracking</Menu.SubmenuTitle>
							</Menu.SubmenuTrigger>
							<Menu.SubmenuContent>
								<Menu.Item>
									<Menu.Popover
										open={state?.open === "inbox" || open === "inbox"}
										onOpenChange={(event) => {
											if (!event) {
												navigate(pathname);
											}
										}}>
										<Menu.PopoverTrigger
											className="group w-full"
											asChild>
											<div>
												<Menu.Link
													to={`?open=inbox`}
													state={{ open: "inbox" }}
													preventScrollReset={true}>
													<Menu.Button className="group-data-[state=open]:border group-data-[state=open]:border-input group-data-[state=open]:bg-medium dark:group-data-[state=open]:border-transparent dark:group-data-[state=open]:bg-light">
														<Menu.Icon>{Icons.Inbox}</Menu.Icon>
														<Menu.Title>Inbox</Menu.Title>
														{/*<Menu.KeyboardSlot keyboardKey="⌘N" />*/}
													</Menu.Button>
												</Menu.Link>
											</div>
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
								<Menu.Item>
									<Menu.Button>
										<Menu.Icon>
											<TimesheetIcon />
										</Menu.Icon>
										<Menu.Title>Timesheet</Menu.Title>
										<Menu.KeyboardSlot keyboardKey="⌘K" />
									</Menu.Button>
								</Menu.Item>
							</Menu.SubmenuContent>
						</Menu.SubMenuItem>
					</Menu.Submenu>
				</Menu>
			</ScrollAreaViewport>
		</ScrollArea>
	);
});
