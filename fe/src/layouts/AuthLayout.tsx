import { Outlet } from "react-router";
const AuthLayout = () => {
    return (
        <div className="min-h-screen flex w-full">
            <Outlet />
        </div>
    );
};

export default AuthLayout;
