import { isAuthenticated } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protected({children, allowedRoles}) {
    const user = useSelector(isAuthenticated);
    if(Object.keys(user).length <= 0){
        return <Navigate to={"/login"} replace={true}/>
    }
    if(Object.keys(user).length > 0){
        const accessibleRoute = allowedRoles.includes(user.role) ? children : <Navigate to={"/login"} replace={true}/>
        return accessibleRoute;
    }
    return ( children);
}

export default Protected;