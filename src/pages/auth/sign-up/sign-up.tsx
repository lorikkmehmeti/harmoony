import { cn } from "@/lib/utils.ts";
import { buttonVariants } from "@/lib/variant.ts";
import { UserAuthForm } from "@/pages/auth/sign-up/auth-form.tsx";
import { Link } from "react-router-dom";

export const SignUpPage = () => {
	return (
		<div>
			<div className="rounded-md border border-accent bg-background p-10 shadow">
				<Link
					to="/g/login"
					className={cn(
						buttonVariants({ variant: "ghost" }),
						"absolute right-4 top-4 md:right-8 md:top-8",
					)}>
					Login
				</Link>
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col space-y-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">
							Sign up to your account
						</h1>
						<p className="text-sm text-muted-foreground">
							Create an account to continue
						</p>
					</div>
					<UserAuthForm />
					<p className="px-8 text-center text-sm text-muted-foreground">
						Already got an account{" "}
						<Link
							to="/g/login"
							className="underline">
							Sign in
						</Link>
					</p>
					<p className="px-8 text-center text-sm text-muted-foreground">
						By clicking sign up, you agree to our{" "}
						<Link
							to="/terms"
							className="underline underline-offset-4 hover:text-primary">
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link
							to="/privacy"
							className="underline underline-offset-4 hover:text-primary">
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	);
};
