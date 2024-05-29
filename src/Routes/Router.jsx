import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AdminLayout from "../Layout/AdminLayout";
import AllUsers from "../pages/AdminDeshboard/AllUsers";
import UploadMenu from "../pages/AdminDeshboard/UploadMenu";
import ManageMenu from "../pages/AdminDeshboard/ManageMenu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: 'all-user',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'upload-menu',
                element: <UploadMenu></UploadMenu>
            },
            {
                path: 'manage-menu',
                element: <ManageMenu></ManageMenu>
            }
        ]
    }
]);


export default router