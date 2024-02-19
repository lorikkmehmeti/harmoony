import { NotificationIcon } from "@/pages/authenticated/components/sidebar/icons/icons.tsx";
import React from "react";

interface EmptyStateProps {
	title: string;
	description: string;
	children?: React.ReactNode;
}

export const EmptyState = ({
	title,
	description,
	children,
}: EmptyStateProps) => {
	return (
		<div className="flex max-w-[500px] flex-col items-center gap-3 p-4 py-14">
			<div className="flex h-10 w-10 items-center justify-center rounded-md border border-accent shadow">
				<NotificationIcon
					width="20"
					height="20"
				/>
			</div>
			<div className="flex flex-col gap-1 text-center text-black dark:text-white">
				<div className="text-base font-medium">{title}</div>
				<div className="text-xs text-muted-foreground">{description}</div>
				{children}
			</div>
		</div>
	);
};
