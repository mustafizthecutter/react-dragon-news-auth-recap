import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if (loading) {
        return <p className="text-3xl text-center font-bold text-yellow-600">Loading</p>
    }
    if (user) {
        return children
    };
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;