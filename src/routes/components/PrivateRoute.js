// React
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectTo }) => {
    const session = localStorage.getItem("token") ? true : false;
    
    return (
        session 
        ? <Outlet/>
        : <Navigate to={redirectTo} replace={true}/>
    );
}
