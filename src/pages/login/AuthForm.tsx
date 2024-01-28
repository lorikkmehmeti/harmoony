import * as React from "react";

import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { useAuthContext, useUser } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setLoading] = React.useState<boolean>(false);
	const user = useUser();

	const auth = useAuthContext();
	const navigate = useNavigate();

	const [email] = useState("cavar20405@gosarlar.com");
	const [password, setPassword] = useState("");

	const login = async (email: string, password: string) => {
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

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		if (email && password) {
			await login(email, password);
		}
	}

	return (
		<div
			className={cn("grid gap-6", className)}
			{...props}>
			<form onSubmit={onSubmit}>
				<div className="grid gap-2">
					<div className="grid gap-1">
						<Label
							className="sr-only"
							htmlFor="email">
							Email
						</Label>
						<Input
							value={email}
							className="bg-white"
							id="email"
							placeholder="name@example.com"
							type="email"
							autoCapitalize="none"
							autoComplete="email"
							autoCorrect="off"
							disabled={true}
							readOnly={true}
						/>

						<Label
							className="sr-only"
							htmlFor="password">
							Password
						</Label>
						<Input
							value={password}
							className="bg-white"
							id="password"
							placeholder="••••••••"
							type="password"
							autoCapitalize="none"
							autoComplete="password"
							autoCorrect="off"
							disabled={isLoading}
							onChange={(event) => setPassword(event.target.value)}
						/>
					</div>
					<Button disabled={isLoading}>Sign in with email</Button>
				</div>
			</form>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
			</div>
			<Button
				variant="outline"
				type="button"
				disabled={true}>
				Microsoft Azure
			</Button>
		</div>
	);
}
