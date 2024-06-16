import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = () => {
    const { auth } = useAuth();
    const location = useLocation();
    if ((location.pathname === "/signin" || location.pathname === "/register") && auth) {
        return <Navigate to="/" replace />;
    }

    // Render outlet (actual route content) if not authenticated and accessing signin or register
    if ((location.pathname === "/signin" || location.pathname === "/register") && !auth) {
        return <Outlet />;
    }

    // Redirect to signin or register if not authenticated
    if (!auth) {
        return <Navigate to="/signin" replace />;
    }

    // Default render for other cases
    return <Outlet />;
}
export default ProtectedRoute;