import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { AuthProvider } from "./context/AuthContext";
import AuthWrapper from "./components/AuthWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
 <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID} >
    <AuthProvider>
      <AuthWrapper />
    </AuthProvider>
  </GoogleOAuthProvider>
);
