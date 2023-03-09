import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { mainLayoutRoutes } from "./const";

const Routes = () => {

  const { routes } = mainLayoutRoutes;

  return (
    <RoutesWrapper>
        {routes.map(({ path, Component }) => (
            <Route 
                key={path} 
                path={path} 
                element={ 
                    <Component/>
                }
            />
        ))}
    </RoutesWrapper> 
  );
};

export default Routes