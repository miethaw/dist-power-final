import React from 'react';
import { Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { history } from '../_redux/_helpers';



import { PrivateRoute } from '../_redux/_components';
import  OverView  from '../pages/overView';
import Login from "../pages/login";
import  MarketBiddingPage  from '../pages/marketBiddingPage';
import  SiteControlPage  from '../pages/siteControlPage';
import { Header } from '../pages/constants/components/Header';
import ActivationReportPage from '../pages/activationReportPage';
import UserListPage from '../pages/userListPage';


export const RouteName = {
  // routeLoginPage: "login",
  routeFirstPage: "",
  routOverViewPage: "overview",

  routeMarketBiddingPage: "market-bidding",

  routeSiteControlPage: "site-control",

  routeActivationReportPage: "activation-report",

  routeUserListPage: "user-list",
};

export default {
  routes: {
    // [RouteName.routeFirstPage]:{component:LoginContainer},

    // [RouteName.routeLoginPage]: { component: Login },
    [RouteName.routOverViewPage]: { component: OverView },
    [RouteName.routeMarketBiddingPage]: { component: MarketBiddingPage },
    [RouteName.routeSiteControlPage]: { component: SiteControlPage },
    [RouteName.routeActivationReportPage]: { component: ActivationReportPage },
    [RouteName.routeUserListPage]: { component: UserListPage },


  },
  default: RouteName.routeFirstPage,
};

