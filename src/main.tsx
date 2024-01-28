import { SessionContextProvider } from "@/lib/providers/SessionContext.tsx";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const supabaseUrl = "https://wefgbvropriawflehvwc.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlZmdidnJvcHJpYXdmbGVodndjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NzA5ODYsImV4cCI6MjAyMjA0Njk4Nn0.DP_ghcsQFfB-X3PCYsQifXa_Vjo1fRyejzKxFW7-y_M";
const supabase = createClient(supabaseUrl, supabaseKey);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SessionContextProvider supabaseClient={supabase}>
			<App />
		</SessionContextProvider>
	</React.StrictMode>,
);
