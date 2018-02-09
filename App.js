/**
 * Morgan State Mobile App
 * Using react-native
 * @Bisi
 */

import React from 'react';

import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import Home from './src/components/home';
import Events from './src/components/events';
import Calendars from './src/components/events/calendar';
import CalendarList from './src/components/events/calendarList';
import Agenda from './src/components/events/agenda';
import News from './src/components/news';
import Newsdata from './src/components/newsdata';
import MyMSU from './src/components/mymsu';
import Athletics from './src/components/athletics';
import Videos from './src/components/videos';
import Photos from './src/components/photos';
import TodayView from './src/components/weather/todayView';
import ForecastView from './src/components/weather/forecastView';
import Drawer from './src/Drawer';
import SideBar from './src/components/sidebar';
import Weather from './src/components/weather/';
import Facebook from './src/components/facebook/';
import Twitter from './src/components/twitter/';
import Instagram from './src/components/instagram/';

const myDrawer = DrawerNavigator(
  {
    Home: { screen: Home },
    MyMSU: { screen: MyMSU },
    Events: { screen: Events },
    Calendars: { screen: Calendars },
    CalendarList: { screen: CalendarList },
    Agenda: { screen: Agenda },
    News: { screen: News },
    Newsdata: { screen: Newsdata },
    Athletics: { screen: Athletics },
    Photos: { screen: Photos },
    Videos: { screen: Videos },
    Tabs: { screen: Weather },
    Forecast: { screen: ForecastView },
    Today: { screen: TodayView },
    Facebook: { screen: Facebook },
    Twitter: { screen: Twitter },
    Instagram: { screen: Instagram },

  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => <SideBar {...props} />,
  },
);
export const Tabs = TabNavigator(
  {
    Forecast: { screen: ForecastView },
    Today: { screen: TodayView },
  },
  {
    // tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  },
);


const msuMobile = StackNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: myDrawer },
    MyMSU: { screen: MyMSU },
    Events: { screen: Events },
    Calendars: { screen: Calendars },
    CalendarList: { screen: CalendarList },
    Agenda: { screen: Agenda },
    News: { screen: News },
    Newsdata: { screen: Newsdata },
    Athletics: { screen: Athletics },
    Photos: { screen: Photos },
    Videos: { screen: Videos },
    Tabs: { screen: Tabs },
    // ForecastView: {screen: ForecastView},
    // TodaytView: {screen: TodayView},
    // Weather: { screen: Weather},
    Facebook: { screen: Facebook },
    Twitter: { screen: Twitter },
    Instagram: { screen: Instagram },
    MainNavigator: {
      screen: ({ navigation, screenProps }) => (<myDrawer
        screenProps={{ parentNavigation: navigation, ...screenProps }}
      />),
    },
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  },

);
export default msuMobile;
