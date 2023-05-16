import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // redirect to where you want to go
    const location = useLocation();

    // loading show
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children;
    }
    // privet routes navigate to the login page
    return <Navigate
        to="/login" state={{ from: location }} replace>
    </Navigate>
};

export default PrivetRoute;