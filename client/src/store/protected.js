import { isAuthenticated } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protected({children}) {
    const user = useSelector(isAuthenticated);
    console.log("USER ECISSSS", user);
    if(Object.keys(user).length <= 0){
        return <Navigate to={"/login"} replace={true}/>
    }
    if(Object.keys(user).length > 0){
        return children;
    }
    return ( children);
}

export default Protected;