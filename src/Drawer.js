/* @flow */

import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import Home from './components/home/';
import News from './components/news';
import Newsdata from './components/newsdata';
import Weather from './components/weather';
// import ShareWindow from './components/share';
import SideBar from './components/sidebar';
// import Videos from "./components/videos/";
// import Weather from "./components/weather/";
// import Facebook from "./components/facebook/";
// import Twitter from "./components/twitter/";
// import Instagram from "./components/instagram/";


const DrawerMenu = DrawerNavigator(
  {
    Home: { screen: Home },
    News: { screen: News },
    Newsdata: { screen: Newsdata },
    // ShareWindow: { screen: ShareWindow },
    // Videos: { screen: Videos },
    Weather: { screen: Weather },
    // Facebook: { screen: Facebook },
    // Twitter: { screen: Twitter },
    // Instagram: { screen: Instagram },


  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'right',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => <SideBar {...props} />,
  },
);

export default DrawerMenu;
