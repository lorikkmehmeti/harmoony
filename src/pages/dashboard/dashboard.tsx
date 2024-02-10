// import { Button } from "@/components/ui/button.tsx";
//
// import { ROUTES } from "@/lib/constants/routes.ts";
// import { useAuthContext } from "@/lib/hooks";
// import { _path } from "@/lib/utils.ts";
// import { useNavigate } from "react-router-dom";
import Layout from "@/pages/dashboard/layout.tsx";

export const Dashboard = () => {
	// const auth = useAuthContext();
	// const navigate = useNavigate();

	// const logOut = () => {
	// 	auth
	// 		.signOut()
	// 		.then(() => {
	// 			navigate(_path(ROUTES.auth, ROUTES.login));
	// 		})
	// 		.catch((err) => {
	// 			throw new Error(err);
	// 		});
	// };
	return <Layout />;
};
