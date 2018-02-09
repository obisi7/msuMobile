import React, { Component } from "react";
import { BackAndroid, StatusBar, Platform } from "react-native";
// import { variables, Drawer } from "native-base";
import {StackNavigator, DrawerNavigator } from 'react-navigation';

// import platform from "../native-base-theme/variables/platform";

import Home from "components/home/";
import News from "components/news";
import Drawer from './Drawer';
import Newsdata from "components/newsdata";
import Shuttle from "components/shuttle/";
import Videos from "components/videos/";
import Events from "components/eventManager/";
import Weather from "components/weather/";
import Photos from "components/photos/";
import Athletics from "components/athletics/";
import Alumni from "components/alumni/";
import Learn from "components/learn/";
import Give from "components/give/";
import Find from "components/find/";
import Nearme from "components/nearme/";
import MyMSU from "components/mymsu/";



export const myBears = StackNavigator(
    {
        Home: { screen: Home },
        Drawer: { screen: Drawer },
        Newsdata: { screen: Newsdata },
        Shuttle: { screen: Shuttle },
        Videos: { screen: Videos },
        Events: { screen: Events },
        Weather: { screen: Weather },
        Photos: { screen: Photos },
        Athletics: { screen: Athletics },
        Alumni: { screen: Alumni },
        Learn: { screen: Learn },
        Give: { screen: Give },
        Find: { screen: Find },
        Nearme: { screen: Nearme },
        MyMSU: { screen: MyMSU },
    },
    {
        initialRouteName: "Drawer",

    }
);

