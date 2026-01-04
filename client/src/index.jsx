import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { AuthProvider } from "./context/AuthContext";
import AuthWrapper from "./components/AuthWrapper";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);
