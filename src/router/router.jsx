import {
    createBrowserRouter
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import InstitutionRegisterPage from "../pages/InstitutionRegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },

    {
        path: "/login",
        element: <LoginPage />
    },

    {
        path: "/register",
        element: <RegisterPage />
    },

    {
        path: "/institution/register",
        element: <InstitutionRegisterPage />
    }
]);

export default router;