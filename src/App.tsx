import { routerRoutes } from "@/routes";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<RouterProvider router={routerRoutes} />
		</>
	);
}

export default App;
