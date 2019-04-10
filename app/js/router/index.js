import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import IOU from "../IOU/index.vue"
import crowdFunding from "../crowdFunding/index.vue"
import Download from "../special/download.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money,
        },
        {
            path: "/IOU",
            name: "IOU",
            component: IOU,
        },
        {
            path: "/crowdFunding",
            name: "crowdFunding",
            component: crowdFunding,
        },
        {
            path: "/download",
            name: "Download",
            component: Download,
        },
    ],
})

