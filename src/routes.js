import ActivationReportPage from "./pages/activationReportPage"
import Login from './pages/login'
import MarketBiddingPage from './pages/marketBiddingPage'
import Overview from './pages/overView'
import SiteControlPage from './pages/siteControlPage'
import UserListPage from './pages/userListPage'
import queryString from "query-string"

export const routeName = {
    login: "/login",
    activationReport: "/activation-report",
    marketBidding: "/market-bidding",
    overview: "/oveview",
    siteControl: "/site-control",
    userList: "/user-list"
}

export default [
    // {
    //     path: "/",
    //     component: AuthCheckingPage,
    //     exact: true
    // },
    {
        path: routeName.login,
        component: Login
    },
    {
        path: routeName.activationReport,
        component: ActivationReportPage,
    },
    {
        path: routeName.marketBidding,
        component: MarketBiddingPage,
    },
    {
        path: routeName.overview,
        component: Overview,
    },
    {
        path: routeName.siteControl,
        component: SiteControlPage
    },
    {
        path: routeName.userList,
        component: UserListPage
    }
    // {
    //     path: "/equip-performance-overview",
    //     component: EquipPerformancePage,
    //     routes: [
    //         {
    //             path: "/tacos/bus",
    //             component: Bus
    //         },
    //         {
    //             path: "/tacos/cart",
    //             component: Cart
    //         }
    //     ]
    // }
]

export const routeTo = ({ routeTo, history, search=null, data={}, replace=false }) => {
    if(replace) {
        return history.replace({
            pathname: routeTo,
            search: search ? `?${queryString.stringify(search)}` : null
        }, {
            ...data
        })
    }
    return history.push({
        pathname: routeTo,
        search: search ? `?${queryString.stringify(search)}` : null
    }, {
        ...data
    })
}

export const routeToLogin = ({ history, search=null, data={}, replace=false }) => {
    if(replace) {
        return history.replace({
            pathname: routeName.login,
            search: search ? `?${queryString.stringify(search)}` : null
        }, {
            ...data
        })
    }
    return history.push({
        pathname: routeName.login,
        search: search ? `?${queryString.stringify(search)}` : null
    }, {
        ...data
    })
}

export const routeToEquipPerformance = ({ history, search=null, data={}, replace=false }) => {
    if(replace) {
        return history.replace({
            pathname: routeName.equipPerformance,
            search: search ? `?${queryString.stringify(search)}` : null
        }, {
            ...data
        })
    }
    return history.push({
        pathname: routeName.equipPerformance,
        search: search ? `?${queryString.stringify(search)}` : null
    }, {
        ...data
    })
}

export const routeToDiWaterDailyPerformance = ({ history, search=null, data={}, replace=false }) => {
    if(replace) {
        return history.replace({
            pathname: routeName.diWaterDailyPerformance,
            search: search ? `?${queryString.stringify(search)}` : null
        }, {
            ...data
        })
    }
    return history.push({
        pathname: routeName.diWaterDailyPerformance,
        search: search ? `?${queryString.stringify(search)}` : null
    }, {
        ...data
    })
}

export const routeToCityWaterDailyPerformance = ({ history, search=null, data={}, replace=false }) => {
    if(replace) {
        return history.replace({
            pathname: routeName.cityWaterDailyPerformance,
            search: search ? `?${queryString.stringify(search)}` : null
        }, {
            ...data
        })
    }
    return history.push({
        pathname: routeName.cityWaterDailyPerformance,
        search: search ? `?${queryString.stringify(search)}` : null
    }, {
        ...data
    })
}