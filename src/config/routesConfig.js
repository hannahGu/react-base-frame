import App from "../App";
import About from "../About";
import Main from "../Main";
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
  }
];

export default routesConfig;
