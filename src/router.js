import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./components/Dashboard";
import Login1 from "./components/Login1";
import OrderTracker from "./components/OrderTracker";
import { dashboardData, login1Data, orderTrackerData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      component: Dashboard,
      props: { ...dashboardData },
    },
    {
      path: "/ordertracker",
      component: OrderTracker,
      props: { ...orderTrackerData },
    },
    {
      path: "*",
      component: Login1,
      props: {
        enterYourEmailAndPasswordBelow: "Enter your email and password below",
        minidc: "MINIDC",
        gologLogoWhite1:
          "https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/golog-logo-white-1@2x.png",
        buttonContainedPrimaryDefaultProps: login1Data.buttonContainedPrimaryDefaultProps,
        textfieldLabelTextfieldDefaultProps: login1Data.textfieldLabelTextfieldDefaultProps,
        textfieldLabelIconDefaultProps: login1Data.textfieldLabelIconDefaultProps,
      },
    },
  ],
});
