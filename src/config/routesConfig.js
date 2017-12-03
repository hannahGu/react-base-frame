import App from "../App";
import About from "../About";
import Main from "../Main";
import Order from "../Order";
import Mine from "../Mine";
const routesConfig = [
  {
    path: "/",
    component: App
    // indexRoute: { onEnter: (nextState, replace) => replace('/welcome') }, // indexredirect
    // routes: [
    //   {
    //     path: "/main",
    //     component: Main
    //   },
    //   {
    //     path: "/about",
    //     component: About
    //   }
    // ]
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/main",
    component: Main
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/mine",
    component: Mine
  },

];

export default routesConfig;
