import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import JoinAsHR from "../Pages/JoinAsHR/JoinAsHR";
import LoginPage from "../Pages/LoginPage/LoginPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/joinasemployee',
                element:<JoinAsEmployee/>
            },
            {
                path:'/joinashr',
                element:<JoinAsHR/>
            },
            {
                path:'/login',
                element:<LoginPage/>
            }
        ]
    }
])

export default router