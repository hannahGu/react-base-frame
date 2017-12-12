import React from "react";
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  IndexRoute
} from "react-router-dom";
import RoutesConfig from "./src/config/routesConfig";
const routes = (
  <Router>
    <div>
      {RoutesConfig.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
          )}
        />
      ))}
    </div>
  </Router>
);
export default routes;
