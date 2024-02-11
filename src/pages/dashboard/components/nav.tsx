import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
// import { useTheme } from "@/lib/hooks/use-theme.ts";
// import { useUserContext } from "@/lib/providers/UserProvider.tsx";
import { useAuthContext } from "@/lib/hooks";
import { cn } from "@/lib/utils.ts";
import { useNavigate } from "react-router-dom";

export function Nav() {
	const auth = useAuthContext();

	const navigate = useNavigate();
	// const user = useUser();

	// const $user = useUserContext();

	const logOut = () => {
		auth
			.signOut()
			.then(() => {
				navigate("/login");
			})
			.catch((err) => {
				throw err;
			});
	};
	// const { setTheme, theme } = useTheme();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					role="combobox"
					aria-label="Select a team"
					className={cn(`relative h-8 w-8 rounded-full`)}>
					<Avatar className="h-8 w-8">
						<AvatarImage
							className="object-cover"
							src=""
						/>
						<AvatarFallback className="bg-blue-300 text-xs">SC</AvatarFallback>
					</Avatar>
					{/*<span className="whitespace-nowrap">*/}
					{/*	{$user?.first_name}*/}
					{/*</span>*/}
					{/*<span className="ml-auto h-4 w-4 shrink-0 opacity-50"></span>*/}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-60 border-accent"
				forceMount
				style={{
					minWidth: "var(--radix-dropdown-menu-trigger-width)",
					maxHeight: "var(--radix-popover-content-available-height)",
				}}>
				<DropdownMenuLabel className="font-normal">
					{/*<div className="flex flex-col space-y-1">*/}
					{/*	<p className="text-md font-medium leading-none">*/}
					{/*		{$user?.first_name}*/}
					{/*		{$user && $user?.subscription?.name === "basic" && (*/}
					{/*			<span className="ml-1 inline-flex items-center rounded-md border border-accent bg-light px-2 py-1 align-middle text-[11px] text-blue-500 dark:text-amber-200">*/}
					{/*				Free*/}
					{/*			</span>*/}
					{/*		)}*/}
					{/*	</p>*/}
					{/*	<p className="text-sm leading-none text-muted-foreground">*/}
					{/*		{user?.email}*/}
					{/*	</p>*/}
					{/*</div>*/}
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem
						onClick={() => {
							// setTheme(theme === "dark" ? "light" : "dark");
						}}>
						Toggle Theme
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Profile
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Settings
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>New Team</DropdownMenuItem>
				</DropdownMenuGroup>
				{/*{$user && $user?.subscription?.name === "basic" && (*/}
				{/*	<DropdownMenuItem>Upgrade to pro</DropdownMenuItem>*/}
				{/*)}*/}
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={logOut}>
					Log out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
