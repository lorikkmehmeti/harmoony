import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import { cn } from "@/lib/utils.ts";
import { cva } from "class-variance-authority";
import React, { useId } from "react";
import { NavLink } from "react-router-dom";

type MenuItemWithTo = {
	id: number;
	name: string;
	to: string;
	icon?: React.ReactNode;
	onClick?: never;
	children?: IMenuItem[];
};

type MenuItemWithOnClick = {
	id: number;
	name: string;
	to?: never;
	icon?: React.ReactNode;
	onClick: () => void;
	children?: IMenuItem[];
};

export type IMenuItem = MenuItemWithTo | MenuItemWithOnClick;

const link = cva(
	[
		"flex",
		"group",
		"focus-visible:outline-0",
		"w-full",
		"py-1.5",
		"px-2",
		"leading",
		"text-left",
		"border",
		"font-medium",
		"text-sm",
		"rounded-md",
		"focus:outline-0",
		"focus-visible:bg-medium",
		"dark:focus-visible:bg-light",
		// 'ring-offset-background',
		// 'focus-visible:ring-[1.5px]',
		// 'focus-visible:ring-ring',
		// 'focus-visible:ring-offset-0',
		"hover:bg-medium",
		"delay-0",
		"cursor-pointer",
		"gap-1",
		"bg-transparent",
		"border",
		"border-transparent",
		"dark:border-transparent",
		"dark:hover:bg-light",
	],
	{
		variants: {
			state: {
				normal: [],
				active: [
					"dark:bg-[#212121]",
					"bg-canvas",
					"border-input",
					"shadow-[0_0_rgb(0,0,0),0_0_rgb(0,0,0)]",
				],
			},
		},

		defaultVariants: {
			state: "normal",
		},
	},
);

function getRandomLetter() {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const randomIndex = Math.floor(Math.random() * alphabet.length);
	return alphabet[randomIndex];
}

export const MenuItem: React.FC<{
	type: "popover" | "button" | "link";
	item: IMenuItem;
	classNames?: string;
}> = ({ item, classNames }) => {
	return (
		<React.Fragment key={useId()}>
			{item.to ? (
				<NavLink
					to={item.to!}
					end
					className={({ isActive }) =>
						cn(link({ state: isActive ? "active" : "normal" }), classNames)
					}>
					{item.icon ? item.icon : null}
					<span className="mr-auto inline-flex self-center">{item.name}</span>
					{item?.to?.includes("/p") && (
						<span className="flex min-h-3 min-w-[30px] items-center justify-center self-center rounded-sm border border-zinc-500/20 bg-zinc-500/10 px-1 text-[10px] font-medium tabular-nums text-zinc-500 dark:text-zinc-300">
							⌘ {getRandomLetter()}
						</span>
					)}
				</NavLink>
			) : (
				<button
					className={cn(link({ state: "normal" }), classNames)}
					onClick={item.onClick}>
					{item.icon ? item.icon : null}
					<span className="mr-auto inline-flex self-center">{item.name}</span>
					{item?.to?.includes("/p") && (
						<span className="flex min-h-3 min-w-[30px] items-center justify-center self-center rounded-sm border border-zinc-500/20 bg-zinc-500/10 px-1 text-[10px] font-medium tabular-nums text-zinc-500 dark:text-zinc-300">
							⌘ {getRandomLetter()}
						</span>
					)}
				</button>
			)}
		</React.Fragment>
	);
};

export const Menu = () => {};

export const Submenu: React.FC<{
	item: IMenuItem;
	onItemClick?: (item: IMenuItem) => void;
	opened?: boolean;
}> = ({ item, opened = false }) => {
	const id = useId();
	return (
		<Accordion
			type="single"
			collapsible
			defaultValue={opened ? id : undefined}>
			<AccordionItem
				value={id}
				className="border-none hover:no-underline">
				<AccordionTrigger
					className={cn(
						"mb-1 mt-2 inline-flex flex-none justify-start rounded-sm border-none p-0.5 px-1 pr-2.5 text-xs text-muted-foreground outline-0 hover:bg-medium hover:no-underline focus-visible:bg-medium dark:hover:bg-light dark:focus-visible:bg-light",
					)}
					asChild>
					<div>
						{item.icon ? item.icon : null}
						<span className="leading-5">{item.name}</span>
					</div>
				</AccordionTrigger>
				<AccordionContent
					asChild
					className="pb-0">
					<ul>
						{item.children &&
							item.children.map((child) => (
								<li
									className="my-[1px]"
									key={child.id}>
									<MenuItem
										type="button"
										item={child}
									/>
								</li>
							))}
					</ul>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
