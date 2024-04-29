import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable.tsx";
import { Search } from "@/pages/authenticated/components/search.tsx";
import {
	AppVersionIcon,
	InviteUser,
} from "@/pages/authenticated/components/sidebar/icons/icons.ts";
import { MenuItem } from "@/pages/authenticated/components/sidebar/menu-item.tsx";
import { Sidebar } from "@/pages/authenticated/components/sidebar/sidebar.tsx";
import TeamSwitcher from "@/pages/authenticated/components/team-switcher.tsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<ResizablePanelGroup
			direction="horizontal"
			autoSaveId="persistence"
			className="h-full min-h-full w-full items-stretch overflow-hidden">
			<ResizablePanel
				minSize={15}
				defaultSize={18}
				maxSize={25}
				className="max-md:min-w-[200px]"
				collapsible>
				<div className="h-full border-b border-input bg-background py-2">
					<div className="flex h-full flex-col">
						<div className="px-3">
							<TeamSwitcher />
							<Search />
						</div>

						{/*<MainNav className="mx-6" />*/}
						<Sidebar />
						<div className="mt-auto flex flex-col gap-[1px] bg-background px-2">
							<div className="mt-auto">
								<ul>
									<li className="my-[1px]">
										<MenuItem
											key={33333}
											type="button"
											item={{
												id: 345345345,
												name: "Invite people",
												icon: <InviteUser />,
												to: "/dashboardi",
											}}
										/>
										<MenuItem
											key={33444333}
											classNames={"pointer-events-none opacity-80"}
											type="link"
											item={{
												id: 345345345,
												name: `Version ${import.meta.env.VITE_VERSION}`,
												icon: <AppVersionIcon />,
												onClick: () => {},
											}}
										/>
									</li>
								</ul>
							</div>
							{/*<Nav />*/}
						</div>
					</div>
				</div>
			</ResizablePanel>
			<ResizableHandle
				withHandle
				className="border-accent"
			/>
			<ResizablePanel>
				<Outlet />
			</ResizablePanel>
		</ResizablePanelGroup>
	);
};

export default Layout;
