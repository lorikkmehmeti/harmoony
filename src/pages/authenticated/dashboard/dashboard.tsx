import Layout from "@/pages/authenticated/dashboard/layout.tsx";

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
