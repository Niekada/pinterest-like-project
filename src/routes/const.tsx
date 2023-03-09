import Home from "../pages/Home/Home";
import Pin from "../pages/Pin/Pin";
import Examples from "../pages/Examples/Examples";
import { RouteTypes } from "./RouteTypes";

export const HOME_PATH = "/";
export const PIN_PATH = "/PIN";
export const Examples_PATH = "/Examples";

export const mainLayoutRoutes: RouteTypes = {
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
            path: Examples_PATH, 
            Component: Examples,
        },
    ],
};