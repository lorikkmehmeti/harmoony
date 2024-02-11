import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { cn } from "@/lib/utils.ts";
import {
	PopoverContentProps,
	PopoverProps,
	PopoverTriggerProps,
} from "@radix-ui/react-popover";
import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { Link, LinkProps, NavLink, NavLinkProps } from "react-router-dom";

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

type MenuNamespacePropsType = {
	children?: React.ReactNode;
};

type LinkPropsType = MenuNamespacePropsType &
	NavLinkProps &
	React.RefAttributes<HTMLAnchorElement> & {
		to: string;
	};

type LinkHrefPropsType = MenuNamespacePropsType &
	LinkProps &
	React.RefAttributes<HTMLAnchorElement> & {
		to: string;
	};

type ButtonPropsType = MenuNamespacePropsType &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		classNames?: string;
	};

export const Menu = ({ children }: MenuNamespacePropsType) => (
	<React.Fragment>{children}</React.Fragment>
);

Menu.Item = function Item({ children }: MenuNamespacePropsType) {
	return <React.Fragment>{children}</React.Fragment>;
};

Menu.Title = function Title({
	children,
	className,
	...props
}: MenuNamespacePropsType & HTMLAttributes<HTMLSpanElement>) {
	return (
		<span
			className={cn("mr-auto inline-flex self-center", className)}
			{...props}>
			{children}
		</span>
	);
};

Menu.Link = function MenuLink({ to, children, ...props }: LinkHrefPropsType) {
	return (
		<Link
			to={to}
			{...props}
			className={cn("focus-visible:outline-0", props.className)}>
			{children}
		</Link>
	);
};

Menu.NavLink = function MenuNavLink({ to, children, ...props }: LinkPropsType) {
	return (
		<NavLink
			to={to}
			end
			className={({ isActive }) =>
				cn(link({ state: isActive ? "active" : "normal" }), props.className)
			}
			{...props}>
			{children}
		</NavLink>
	);
};

Menu.Icon = function Icon({ children }: MenuNamespacePropsType) {
	return children;
};

Menu.Button = function Button({
	children,
	className,
	...props
}: ButtonPropsType) {
	const buttonClassName = cn(link({ state: "normal" }), className);
	return (
		<button
			className={buttonClassName}
			{...props}>
			{children}
		</button>
	);
};

type KeyboardPropTypes = HTMLAttributes<HTMLSpanElement> & {
	keyboardKey: string;
};

const KeyboardClasses = cva(
	"flex min-h-3 min-w-[30px] items-center justify-center self-center tracking-[2px] rounded-sm border border-zinc-500/20 bg-zinc-500/10 px-1 text-[10px] font-medium tabular-nums text-zinc-500 dark:text-zinc-300",
);

Menu.KeyboardSlot = function Keyboard({
	className,
	keyboardKey,
	...props
}: KeyboardPropTypes) {
	if (!keyboardKey) throw new Error("Keyboard key need to be initialized");
	return (
		<span
			className={cn(KeyboardClasses(), className)}
			{...props}>
			{keyboardKey}
		</span>
	);
};

type PopoverItemProps = PopoverProps & MenuNamespacePropsType;

Menu.Popover = function MenuPopover({ children, ...props }: PopoverItemProps) {
	return <Popover {...props}>{children}</Popover>;
};

type MenuPopoverTriggerProps = MenuNamespacePropsType & PopoverTriggerProps;

Menu.PopoverTrigger = function Trigger({
	children,
	...props
}: MenuPopoverTriggerProps) {
	return (
		<PopoverTrigger className={cn("group w-full", props.className)}>
			{children}
		</PopoverTrigger>
	);
};

type PopoverContentPropsType = MenuNamespacePropsType & PopoverContentProps;

Menu.PopoverContent = function Content({
	children,
	...props
}: PopoverContentPropsType) {
	return (
		<PopoverContent
			side="right"
			sideOffset={6}
			align="start"
			className={cn(
				"min-h-[500px] min-w-[350px] border border-accent p-2 py-2 text-sm text-muted-foreground shadow",
				props.className,
			)}
			{...props}>
			{children}
		</PopoverContent>
	);
};
