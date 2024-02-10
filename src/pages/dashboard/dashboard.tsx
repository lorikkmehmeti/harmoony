import { Button } from "@/components/ui/button.tsx";

import { ROUTES } from "@/lib/constants/routes.ts";
import { useAuthContext } from "@/lib/hooks";
import { _path } from "@/lib/utils.ts";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
	const auth = useAuthContext();
	const navigate = useNavigate();

	const logOut = () => {
		auth
			.signOut()
			.then(() => {
				navigate(_path(ROUTES.auth, ROUTES.login));
			})
			.catch((err) => {
				throw new Error(err);
			});
	};
	return (
		<div className="p-4">
			<Button
				size="sm"
				onClick={logOut}>
				Sign out
			</Button>
		</div>
	);
};
