import Vue from "vue"
import Router from "vue-router"
import Home from "./pages/home"
import Money from "./pages/money"
import Ious from "./pages/ious"
import Raise from "./pages/raise"
import Download from "./pages/download"
import "../src/assets/css/rest.scss"
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        }, {
            path: "/money",
            name: "money",
            component: Money,
        }, {
            path: "/ious",
            name: "ious",
            component: Ious,
        }, {
            path: "/raise",
            name: "raise",
            component: Raise,
        }, {
            path: "/download",
            name: "download",
            component: Download,
        },
    ],
})