import Home from "../pages/Home/Home";
import Pin from "../pages/Pin/Pin";
import Examples from "../pages/Examples/Examples";
import Login from "../pages/Login/Login";

import { MainLayoutRoutes, AuthLayoutRoutes } from "./RouteTypes";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayouts";

export const HOME_PATH = "/";
export const PIN_PATH = "/PIN";
export const EXAMPLES_PATH = "/Examples";

export const LOGIN_PATH = "/";

export const mainLayoutRoutes: MainLayoutRoutes = {
    Layout: MainLayout,
    routes: [
        {
            path: HOME_PATH,  
            Component: Home,
        },
        {
            path: PIN_PATH, 
            Component: Pin,
        },
        {
            path: EXAMPLES_PATH, 
            Component: Examples,
        },
    ],
};

export const authLayoutRoutes: AuthLayoutRoutes = {
    Layout: AuthLayout,
    routes: [
        {
            path: LOGIN_PATH,  
            Component: Login,
        },
    ],
};