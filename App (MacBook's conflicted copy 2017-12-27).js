/**
 * Morgan State Mobile App
 * Using react-native
 * @Bisi
 */

import React from 'react';

import { StackNavigator, DrawerNavigator  } from 'react-navigation';

import Home from './src/components/home';
import News from './src/components/news';
import NewsData from './src/components/newsdata';
import Videos from './src/components/videos';
import Photos from './src/components/photos';
import YoutubeViewer from './src/components/youtubeView';
import ImageList from './src/components/imageList';
import Drawer from './src/Drawer';
import SideBar from "./src/components/sidebar";
import Weather from "./src/components/weather/";
// import Facebook from "./src/components/facebook/";
// import Twitter from "./src/components/twitter/";
// import Instagram from "./src/components/instagram/";

const myDrawer = DrawerNavigator(
    {
        Home: { screen: Home,},
        News: { screen: News },
        NewsData: { screen: NewsData },
        Videos: { screen: Videos },
        Photos: { screen: Photos },
        ImageList: { screen: ImageList },
        YoutubeViewer: { screen: YoutubeViewer },
        // Facebook: { screen: Facebook },
        // Twitter: { screen: Twitter },
        // Instagram: { screen: Instagram },

    },
    {
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);



const screens = StackNavigator(
    {
        Drawer: {screen: Drawer},
        Home: {screen: myDrawer,},
        News: { screen: News },
        NewsData: { screen: NewsData },
        Videos: { screen: Videos },
        Photos: { screen: Photos },
        ImageList: { screen: ImageList },
        YoutubeViewer: { screen: YoutubeViewer },
        // Weather: { screen: Weather},
        // Facebook: { screen: Facebook },
        // Twitter: { screen: Twitter },
        // Instagram: { screen: Instagram },
        MainNavigator: {screen: ({ navigation, screenProps }) => <myDrawer
            screenProps={{
                parentNavigation: navigation, ...screenProps }} />}
    },
    {
        initialRouteName: "Drawer",
            headerMode: "none",
    }

);
export default screens;
