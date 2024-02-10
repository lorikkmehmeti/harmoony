import { InputProps } from "@/components/ui/input.tsx";
import { cn } from "@/lib/utils.ts";
import React from "react";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(
					"my-2 flex h-8 items-center rounded-md border border-input pl-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-slate-200 focus-within:ring-offset-0 focus-visible:ring-2 focus-visible:ring-slate-200 max-sm:text-[16px]",
					className,
				)}>
				{/*<SearchIcon className="h-[16px] w-[16px]" />*/}
				<input
					{...props}
					type="search"
					ref={ref}
					placeholder="Search"
					className="w-full bg-transparent p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
				/>
			</div>
		);
	},
);

Search.displayName = "Search";

export { Search };
