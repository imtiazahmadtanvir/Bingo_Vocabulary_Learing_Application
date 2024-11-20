import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// // import Register from "../pages/Register";


const AuthLayout = () => {
    return (
        <div>
            <div className="font-poppins bg-gray-800">
                <div className="fixed w-full">
                <Header></Header>
                </div>
                <Outlet></Outlet>



            </div>
        </div>
    );
};

export default AuthLayout;