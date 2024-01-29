import * as React from "react";

import { Button } from "@/components/ui/button.tsx";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useAuthContext, useUser } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email field is required" })
		.email({ message: "Email is invalid" }),
	password: z
		.string()
		.min(1, { message: "Password field is required" })
		.min(8, { message: "Password must be at least 8 characters" }),
});

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setLoading] = React.useState<boolean>(false);
	const user = useUser();

	const auth = useAuthContext();
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onBlur",
	});

	const login = async (values: z.infer<typeof formSchema>) => {
		const { email, password } = values;
		setLoading(true);
		try {
			await auth
				.signInWithPassword({
					email,
					password,
				})
				.then(() => {
					if (!user) window.location.reload();
					else navigate("/dashboard");
				});
		} catch (error) {
			/* empty */
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			className={cn("grid gap-6", className)}
			{...props}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(login)}>
					<div className="grid gap-2">
						<div className="grid gap-1">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="sr-only">Username</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter your email"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="sr-only">Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="••••••••"
												disabled={isLoading}
												autoCapitalize="none"
												autoComplete="password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<Button
							type="submit"
							disabled={isLoading}>
							Sign in with email
						</Button>
					</div>
				</form>
			</Form>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">Or</span>
				</div>
			</div>
			<div className="flex w-full flex-col gap-2">
				<Button
					variant="outline"
					type="button"
					disabled={true}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="mr-2 h-4 w-4"
						viewBox="0 0 256 256">
						<path
							fill="#F1511B"
							d="M121.666 121.666H0V0h121.666z"
						/>
						<path
							fill="#80CC28"
							d="M256 121.666H134.335V0H256z"
						/>
						<path
							fill="#00ADEF"
							d="M121.663 256.002H0V134.336h121.663z"
						/>
						<path
							fill="#FBBC09"
							d="M256 256.002H134.335V134.336H256z"
						/>
					</svg>
					Continue with Microsoft
				</Button>
				<Button
					variant="outline"
					type="button"
					disabled={true}>
					<GitHubLogoIcon className="mr-2 h-4 w-4" />
					Continue with Github
				</Button>
			</div>
		</div>
	);
}
