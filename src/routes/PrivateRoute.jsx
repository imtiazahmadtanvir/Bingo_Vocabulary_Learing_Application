import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = (children) => {

    const {user} =useContext(AuthContext);
    if(user && user?.email){
        return children;
    }
    return (
        <div>
            <Navigate to="/auth/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;