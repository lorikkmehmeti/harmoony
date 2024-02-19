import { Nav } from "@/pages/authenticated/components/nav.tsx";

export function Header() {
	return (
		<header className="flex h-[50px] w-full items-center justify-between border-b border-input px-4">
			<div className="ml-auto">
				<Nav />
			</div>
		</header>
	);
}
