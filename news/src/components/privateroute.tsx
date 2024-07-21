import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute() {
    const isLogin = localStorage.getItem("token");
    return isLogin ? <Outlet /> :<Navigate to="/"/> ;
}