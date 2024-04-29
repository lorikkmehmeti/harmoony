import * as React from "react";
import { z } from "zod";

export interface UserAuthFormProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email field is required" })
		.email({ message: "Email is invalid" }),
	password: z
		.string()
		.min(1, { message: "Password field is required" })
		.min(8, { message: "Password must be at least 8 characters" }),
});
