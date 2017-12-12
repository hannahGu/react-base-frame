import App from "../App";
import Search from "../pages/Search";
const routesConfig = [
  {
    path: "/app",
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
  // {
  //   path: "/about",
  //   component: About
  // },
  // {
  //   path: "/main",
  //   component: Main
  // },
  // {
  //   path: "/order",
  //   component: Order
  // },
  {
    path: "/search",
    component: Search
  }
];

export default routesConfig;
