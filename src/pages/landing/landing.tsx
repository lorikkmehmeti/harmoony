import { ROUTES } from "@/lib/constants/routes.ts";
import { _path } from "@/lib/utils.ts";
import { NavLink } from "react-router-dom";

export const Landing = () => {
	return (
		<div>
			<div className="fixed h-screen w-full bg-[#f0ebe3]"></div>
			<header className="relative z-10">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<nav
						className="flex h-16 items-center justify-between text-black"
						aria-label="Global">
						<div
							className="flex lg:min-w-0"
							aria-label="Global">
							<a
								aria-current="page"
								href="/"
								className="router-link-active router-link-exact-active u-text-black relative flex items-center"
								aria-label="Volta">
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
							</a>
						</div>
						<div className="flex lg:hidden">
							<button
								className="focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex flex-shrink-0 items-center gap-x-1.5 rounded-md p-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
								type="button">
								<span
									className="i-octicon-three-bars-16 h-4 w-4 flex-shrink-0"
									aria-hidden="true"></span>
							</button>
						</div>
						<div className="hidden text-black lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
							<a
								href="/docs"
								className="u-text-gray-600 hover:u-text-gray-900 focus:u-text-gray-900 text-sm font-medium focus:outline-none">
								Guide
							</a>
							<a
								href="/changelog"
								className="u-text-gray-600 hover:u-text-gray-900 focus:u-text-gray-900 text-sm font-medium focus:outline-none">
								Changelog
							</a>
							<a
								href="/pricing"
								className="u-text-gray-600 hover:u-text-gray-900 focus:u-text-gray-900 text-sm font-medium focus:outline-none">
								Pricing
							</a>
							<a
								href="/extension"
								className="u-text-gray-600 hover:u-text-gray-900 focus:u-text-gray-900 text-sm font-medium focus:outline-none">
								Extension
							</a>
							<a
								href="/download"
								className="u-text-gray-600 hover:u-text-gray-900 focus:u-text-gray-900 text-sm font-medium focus:outline-none">
								Download
							</a>
						</div>
						<div className="hidden lg:flex lg:min-w-0 lg:justify-end">
							<NavLink
								to={_path(ROUTES.auth, ROUTES.login)}
								className="focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex flex-shrink-0 items-center gap-x-2 rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:bg-gray-900 disabled:opacity-75 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:disabled:bg-white">
								Log in
							</NavLink>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Landing;
