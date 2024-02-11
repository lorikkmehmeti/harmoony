import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	// CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command.tsx";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectValue,
} from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select.tsx";
import { useTheme } from "@/lib/hooks/use-theme.ts";
import { cn } from "@/lib/utils.ts";
import { CheckIcon } from "@radix-ui/react-icons";
import { ScrollAreaViewport } from "@radix-ui/react-scroll-area";
import React from "react";

const groups = [
	{
		label: "Personal Account",
		teams: [
			{
				label: "Alex Farell",
				value: "personal",
				image:
					"https://renderserver.craft.do/api/logo?type=u&colorIdx=3&caption=A",
			},
		],
	},
	{
		label: "Teams",
		teams: [
			{
				label: "Acme Inc.",
				value: "acme-inc",
				image: "https://i.ibb.co/KmBvWqR/image.png",
			},
			{
				label: "Monsters Inc.",
				value: "monsters",
				image: "https://i.ibb.co/7SdhBRw/image.png",
			},
			{
				label: "Phoenix Corp.",
				value: "phoenix-corp",
				image: "https://i.ibb.co/82VGNFf/image.png",
			},
			{
				label: "Infinite Horizons",
				value: "infinite-horizons",
				image: "https://i.ibb.co/RgDgK1b/image.png",
			},
		],
	},
];

type Team = (typeof groups)[number]["teams"][number];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
	typeof PopoverTrigger
>;

interface TeamSwitcherProps extends PopoverTriggerProps {}

export default function TeamSwitcher({ className }: TeamSwitcherProps) {
	const [open, setOpen] = React.useState(false);
	const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false);
	const [selectedTeam, setSelectedTeam] = React.useState<Team>(
		groups[1].teams[3],
	);

	const { setTheme, theme } = useTheme();

	return (
		<Dialog
			open={showNewTeamDialog}
			onOpenChange={setShowNewTeamDialog}>
			<Popover
				open={open}
				onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						aria-label="Select a team"
						className={cn(
							`h-auto w-full justify-between border-none px-2 ${
								open && "bg-accent"
							}`,
							className,
						)}>
						<Avatar className="mr-2 h-4 w-4">
							<AvatarImage
								src={selectedTeam.image}
								alt={selectedTeam.label}
								className="object-cover"
							/>
							<AvatarFallback>SC</AvatarFallback>
						</Avatar>
						<span className="whitespace-nowrap">{selectedTeam.label}</span>
						<span className="ml-auto h-4 w-4 shrink-0 opacity-50"></span>
						<svg
							className="ml-auto h-4 w-4 shrink-0 opacity-50"
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"></path>
						</svg>
					</Button>
				</PopoverTrigger>
				<PopoverContent
					sideOffset={6}
					className="border-accent p-0">
					<Command>
						<CommandList className="border-accent">
							{/*<CommandInput*/}
							{/*	className="border-accent"*/}
							{/*	placeholder="Search team..."*/}
							{/*/>*/}
							<CommandEmpty>No team found.</CommandEmpty>
							<ScrollArea>
								<ScrollAreaViewport className="max-h-52">
									{groups.map((group) => (
										<CommandGroup
											key={group.label}
											heading={group.label}>
											{group.teams.map((team) => (
												<CommandItem
													key={team.value}
													onSelect={() => {
														setSelectedTeam(team);
														setOpen(false);
													}}
													className="gap-0.5 text-sm">
													<Avatar className="mr-2 h-5 w-5">
														<AvatarImage
															src={team.image}
															alt={team.label}
														/>
														<AvatarFallback>SC</AvatarFallback>
													</Avatar>
													<span className="flex-shrink truncate">
														{team.label}
													</span>
													<CheckIcon
														className={cn(
															"ml-auto h-4 w-4",
															selectedTeam.value === team.value
																? "opacity-100"
																: "opacity-0",
														)}
													/>
												</CommandItem>
											))}
										</CommandGroup>
									))}
								</ScrollAreaViewport>
							</ScrollArea>
						</CommandList>
						<CommandSeparator />
						<CommandList>
							<CommandGroup>
								<DialogTrigger asChild>
									<CommandItem
										onSelect={() => {
											setOpen(false);
											setShowNewTeamDialog(true);
										}}
										className="flex items-center py-2">
										{/*<PlusCircledIcon className="mr-2 h-5 w-5" />*/}
										<svg
											className="mr-2 h-4 w-4 align-middle"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12 8V16M16 12L8 12"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
												stroke="currentColor"
												strokeWidth="1.5"
											/>
										</svg>
										<span className="align-middle leading-4">Create team</span>
									</CommandItem>
								</DialogTrigger>
								<CommandItem
									className="flex items-center py-2"
									onSelect={() => {
										setTheme(theme === "dark" ? "light" : "dark");
									}}>
									<span className="align-middle leading-4">Theme</span>
								</CommandItem>
								<CommandItem className="flex items-center py-2">
									<span className="align-middle leading-4">Log out</span>
								</CommandItem>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create team</DialogTitle>
					<DialogDescription>
						Add a new team to manage products and customers.
					</DialogDescription>
				</DialogHeader>
				<div>
					<div className="space-y-4 py-2 pb-4">
						<div className="space-y-2">
							<Label htmlFor="name">Team name</Label>
							<Input
								id="name"
								autoComplete="off"
								placeholder="Acme Inc."
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="plan">Subscription plan</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select a plan" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="free">
										<span className="font-medium">Free</span> -{" "}
										<span className="text-muted-foreground">
											Trial for two weeks
										</span>
									</SelectItem>
									<SelectItem value="pro">
										<span className="font-medium">Pro</span> -{" "}
										<span className="text-muted-foreground">
											$9/month per user
										</span>
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
				<DialogFooter>
					<Button
						variant="outline"
						onClick={() => setShowNewTeamDialog(false)}>
						Cancel
					</Button>
					<Button type="submit">Continue</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}