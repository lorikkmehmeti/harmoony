import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
	return (
		<>
			<div className="absolute left-6 top-6 lg:hidden">
				<svg
					className="h-5"
					viewBox="0 0 264 264"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M132.343 42.4758C80.049 3.87902 30.5635 -11.0647 10.1402 9.2027C-10.2831 29.4701 4.28101 79.0686 42.4759 131.657C3.8791 183.951 -11.0647 233.437 9.20276 253.86C29.4702 274.283 79.0687 259.719 131.657 221.524C183.951 260.121 233.437 275.065 253.86 254.797C274.283 234.53 259.719 184.931 221.524 132.343C260.121 80.0488 275.065 30.5634 254.797 10.1401C234.53 -10.2832 184.931 4.28088 132.343 42.4758Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div className="relative flex min-h-screen grid-cols-1 md:grid-cols-3 lg:grid">
				<svg
					className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
					aria-hidden="true">
					<defs>
						<pattern
							id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
							width="200"
							height="200"
							x="50%"
							y="-1"
							patternUnits="userSpaceOnUse">
							<path
								d="M100 200V.5M.5 .5H200"
								fill="none"></path>
						</pattern>
					</defs>
					<svg
						x="50%"
						y="-1"
						className="overflow-visible fill-gray-50">
						<path
							d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
							strokeWidth="0"></path>
					</svg>
					<rect
						width="100%"
						height="100%"
						strokeWidth="0"
						fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
				</svg>
				<div className="col-span-1 flex w-full flex-col items-center justify-center gap-5 border border-border p-3 backdrop-blur-[2px] max-lg:hidden md:p-10">
					<div className="absolute inset-0 bg-white" />
					<div className="relative z-20 flex items-center text-lg font-medium">
						<svg
							className="h-10"
							viewBox="0 0 264 264"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M132.343 42.4758C80.049 3.87902 30.5635 -11.0647 10.1402 9.2027C-10.2831 29.4701 4.28101 79.0686 42.4759 131.657C3.8791 183.951 -11.0647 233.437 9.20276 253.86C29.4702 274.283 79.0687 259.719 131.657 221.524C183.951 260.121 233.437 275.065 253.86 254.797C274.283 234.53 259.719 184.931 221.524 132.343C260.121 80.0488 275.065 30.5634 254.797 10.1401C234.53 -10.2832 184.931 4.28088 132.343 42.4758Z"
								fill="currentColor"
							/>
						</svg>
					</div>
					<div className="relative z-20">
						<blockquote className="space-y-2">
							<p className="text-md font-light italic text-muted-foreground">
								&ldquo;Discover the harmony in HR management with Harmoony. It's
								not just a platform; it's a composition of efficiency and ease.
								Working with it is like conducting a seamless symphony of HR
								tasks.&rdquo;
							</p>
							<footer className="text-sm">— Sofia Davis</footer>
						</blockquote>
					</div>
				</div>
				<div className="col-span-2 mx-auto flex w-full items-center justify-center max-md:col-span-3">
					<Outlet />
				</div>
			</div>
		</>
	);
};
