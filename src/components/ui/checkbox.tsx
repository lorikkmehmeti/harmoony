import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
// import { CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			"peer h-5 w-5 shrink-0 rounded-full border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
			className,
		)}
		{...props}>
		<CheckboxPrimitive.Indicator
			className={cn(
				"flex items-center justify-center leading-[0] text-current",
			)}>
			<svg
				className="h-4 w-4"
				viewBox="0 0 256 256">
				<path
					fill="currentColor"
					d="M104 196a12.2 12.2 0 0 1-8.5-3.5l-56-56a12 12 0 0 1 17-17L104 167L207.5 63.5a12 12 0 0 1 17 17l-112 112a12.2 12.2 0 0 1-8.5 3.5Z"></path>
			</svg>
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
