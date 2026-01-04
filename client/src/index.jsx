import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { AuthProvider } from "./context/AuthContext";
import AuthWrapper from "./components/AuthWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
 <GoogleOAuthProvider clientId="679393911042-f7fs9d5f325t7ce8qfpr3fn46g0c5nfq.apps.googleusercontent.com" >
    <AuthProvider>
      <AuthWrapper />
    </AuthProvider>
  </GoogleOAuthProvider>
);
