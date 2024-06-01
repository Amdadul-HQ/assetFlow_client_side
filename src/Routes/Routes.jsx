import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import JoinAsHR from "../Pages/JoinAsHR/JoinAsHR";
import LoginPage from "../Pages/LoginPage/LoginPage";
import AddAnAssetPage from "../Pages/HrManagerPages/AddAnAssetPage/AddAnAssetPage";
import AssetListPage from "../Pages/HrManagerPages/AssetListPage/AssetListPage";
import AllRequestPage from "../Pages/HrManagerPages/AllRequestPage/AllRequestPage";
import MyEmployeeListPage from "../Pages/HrManagerPages/MyEmployeeListPage/MyEmployeeListPage";
import AddEmployeePage from "../Pages/HrManagerPages/AddEmployeePage/AddEmployeePage";

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
            },
            {
                path:'/addasset',
                element:<AddAnAssetPage/>
            },
            {
                path:'/assetlist',
                element:<AssetListPage/>
            },
            {
                path:'/allrequest',
                element:<AllRequestPage/>
            },
            {
                path:'/myemployee',
                element:<MyEmployeeListPage/>
            },
            {
                path:'/addemployee',
                element:<AddEmployeePage/>
            },
            {
                
            }
        ]
    }
])

export default router