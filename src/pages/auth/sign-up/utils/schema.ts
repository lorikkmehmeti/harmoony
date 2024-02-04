import * as React from "react";
import { z } from "zod";

export interface UserAuthFormProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email address field is required" })
		.email({ message: "Email address is invalid" }),
	password: z
		.string()
		.min(1, { message: "Password field is required" })
		.min(8, { message: "Password must be at least 8 characters" }),
	terms: z.literal(true, {
		errorMap: () => ({ message: "Terms and conditions must be checked" }),
	}),
});
