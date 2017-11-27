import App from "../App";
import About from "../About";
import Home from "../Home";
const routesConfig = [
  {
    path: "/",
    component: App
    // indexRoute: { onEnter: (nextState, replace) => replace('/welcome') }, // indexredirect
    // routes: [
    //   {
    //     path: "/about",
    //     component: About
    //   },
    //   {
    //     path: "/home",
    //     component: Home
    //   }
    // ]
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/home",
    component: Home
  }
];

export default routesConfig;
