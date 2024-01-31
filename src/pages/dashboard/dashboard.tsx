import { Button } from "@/components/ui/button.tsx";

import { useAuthContext } from "@/lib/hooks";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
	const auth = useAuthContext();
	const navigate = useNavigate();

	const logOut = () => {
		auth
			.signOut()
			.then(() => {
				navigate("/g/login");
			})
			.catch((err) => {
				throw new Error(err);
			});
	};
	return (
		<div className="p-4">
			<Button onClick={logOut}>Sign out</Button>
		</div>
	);
};
