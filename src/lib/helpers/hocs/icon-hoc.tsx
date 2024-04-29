import { cn } from "@/lib/utils.ts";
import React from "react";

export const withCustomClasses = <P extends { className?: string }>(
	Icon: React.ComponentType<P>,
	customClasses: string,
) => {
	return (props: P) => {
		const combinedClasses = cn(`${customClasses} ${props.className ?? ""}`);
		return (
			<Icon
				{...props}
				className={combinedClasses}
			/>
		);
	};
};
