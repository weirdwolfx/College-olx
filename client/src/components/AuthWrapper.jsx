import { useAuth } from "../context/AuthContext.jsx";
import Login from "../pages/Login.jsx";
import App from "../App.jsx";

export default function AuthWrapper() {
    const { token, loading } = useAuth();

    if (loading) {
        return <h2>Checking authentication..</h2>;
    }

    if (!token) {
        return <Login />;
    }

    return <App />;
}
