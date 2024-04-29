import { Toaster } from "@/components/ui/sonner.tsx";
import { SessionContextProvider } from "@/lib/providers/SessionContext.tsx";
import { ThemeProvider } from "@/lib/providers/theme-provider.tsx";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider storageKey="ui-theme">
			<SessionContextProvider supabaseClient={supabase}>
				<App />
				<Toaster />
			</SessionContextProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
