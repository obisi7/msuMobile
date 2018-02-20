import React, { Component } from "react";
import {
  Dimensions,
  View,
  Text,
  FlatList,
  Alert,
  Image,
  ImageBackground
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import Icon from "react-native-vector-icons/FontAwesome";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Body,
  Right,
  Footer,
  FooterTab
} from "native-base";
import ForecastView from "./forecastView";
import TodayView from "./todayView";
import styles from "./styles";
// import { getWeather } from '../../weatherAPI';

// const IconNames = {
//   clear: "ios-sunny",
//   rain: "md-rainy",
//   thunderstorm: "md-thunderstorm",
//   cloudy: "md-cloudy",
//   snow: "md-snow",
//   fog: "md-umbrella"
// };
// const ITEM_WIDTH = Dimensions.get("window").width;

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      weatherDataCurrent: [],
      isToday: "today",
      activeToday: true,
      activeForecast: false,
      error: null
    };
  }

  componentDidMount() {
    this.getLocation(); // gets current location lat and lon

    //MSU: 39.344,-76.58 My apartment: 39.4,-76.6 geolocations
    // this._getWeather(39.344, -76.58); //.then(res => console.log(res));
    // this._getForecast(39.344, -76.58);
  }

  _getForecast = (lat, lon) => {
    // const API_KEY = 'c888268666fb979927a97be6d20393f6'; // openweathermap api key
    // const API_KEY = 'cd079b371e7e8b3e3c87bc0ee5965a51'; // dark sky weather api
    const baseURL =
      "https://api.darksky.net/forecast/cd079b371e7e8b3e3c87bc0ee5965a51/";
    const url = `${baseURL}${lat},${lon}?exclude=minutely,hourly,flags`;

    // const baseURL =  "https://api.darksky.net/forecast/cd079b371e7e8b3e3c87bc0ee5965a51/";
    // const url = `${baseURL}${lat},${lon}?exclude=minutely,hourly,flags`;
    // const baseURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?appid=c888268666fb979927a97be6d20393f6&cnt=7&units=imperial';//OpenweatherMap baseURL
    // const url = `${baseURL}&lat=${lat}&lon=${lon}`; //URL for openweathermap request
    // use below block for openweathermap
    // return fetch(url, {
    // method: 'GET'
    //  }).then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       weatherData: res.list
    //     })
    //   });
    return fetch(url) // this block is for dark sky api request
      .then(res => res.json())
      .then(res => {
        this.setState({
          weatherData: res.daily.data,
          weatherDataCurrent: res.currently
        });
      });
  };

  getIconImage = iconId => {
    switch (iconId) {
      case "clear-day":
        imageUrl = require("../../img/weatherIcons/clear-day.png");
        break;
      case "clear-night":
        imageUrl = require("../../img/weatherIcons/clear-night.png");
        break;
      case "cloudy-day":
      case "mostly-cloudy":
        imageUrl = require("../../img/weatherIcons/cloudy-day.png");
        break;
      case "cloudy-night":
        imageUrl = require("../../img/weatherIcons/cloudy-night.png");
        break;
      case "partly-cloudy-day":
        imageUrl = require("../../img/weatherIcons/partly-cloudy-day.png");
        break;
      case "partly-cloudy-night":
        imageUrl = require("../../img/weatherIcons/partly-cloudy-night.png");
        break;
      case "rain":
        imageUrl = require("../../img/weatherIcons/rain.png");
        break;
      case "sleet":
        imageUrl = require("../../img/weatherIcons/sleet.png");
        break;
      case "fog":
        imageUrl = require("../../img/weatherIcons/fog.png");
        break;
      case "wind":
        imageUrl = require("../../img/weatherIcons/wind.png");
        break;

      case "snow":
        imageUrl = require("../../img/weatherIcons/snowflake.png");
        break;
      case "thunderstorm":
        imageUrl = require("../../img/weatherIcons/thunderstorm.png");
        break;
      default:
        imageUrl = require("../../img/weatherIcons/clear-day.png");
    }
    return imageUrl;
  };

  getBackImage = iconId => {
    switch (iconId) {
      case "clear-day":
      case "overcast":
        imageBg = require("../../img/bg/clear1.jpg");
        break;
      case "clear-night":
        imageBg = require("../../img/bg/clearNightBmore.jpg");
        break;
      case "cloudy-day":
      case "mostly-cloudy":
      case "partly-cloudy-day":
        // imageBg = require("../../img/bg/cloud.jpg");
        imageBg = require("../../img/bg/clear1.jpg");
        break;
      case "cloudy-night":
        imageBg = require("../../img/bg/cloudyBmore.jpg");
        break;
      case "partly-cloudy-night":
        imageBg = require("../../img/bg/night.jpg");
        break;
      case "rain":
        imageBg = require("../../img/bg/rain2.jpg");
        break;
      case "sleet":
        imageBg = require("../../img/bg/sleet1.jpg");
        break;
      case "fog":
        imageBg = require("../../img/bg/haze.jpg");
        break;
      case "wind":
        imageBg = require("../../img/bg/sleet1.jpg");
        break;

      case "snow":
        imageBg = require("../../img/bg/snow1.png");
        break;
      case "thunderstorm":
        imageBg = require("../../img/bg/thunderstorm.jpg");
        break;
      default:
        imageBg = require("../../img/bg/clear1.jpg");
    }
    return imageBg;
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      posData =>
        this._getForecast(
          posData.coords.latitude,
          posData.coords.longitude
        )
      // posData =>
      //   this._getForecast(
      //     posData.coords.latitude,
      //     posData.coords.longitude
      //   ).then(res =>
      //     this.setState({
      //       weatherData: res.daily.data,
      //       weatherDataCurrent: res.currently
      //     })
      //   ),
      // error => Alert.alert(error),
      // { timeout: 10000 }
    );
  };

  render() {
    const iconId = this.state.weatherDataCurrent.icon;
    curTemp = Math.round(this.state.weatherDataCurrent.temperature * 10) / 10;
    imageUrl = this.getIconImage(iconId);
    imageBg = this.getBackImage(iconId);
    // console.log(this.state);

    let view = this.state.isToday ? (
      <TodayView
        data={this.state.weatherDataCurrent}
        iconId={this.state.weatherDataCurrent.icon}
      />
    ) : (
      <FlatList
        data={this.state.weatherData}
        extraData={this.state}
        renderItem={({ item }) => {
          return <ForecastView data={item} iconId={item.icon} />;
        }}
        keyExtractor={item => item.time}
        // refreshing={this.state.refreshing}
        // onRefresh={this.handleRefresh}
      />
    );
    return (
      <Container style={styles.container}>
        <ImageBackground style={styles.imageContainer} source={imageBg}>
          <Content>
            <Header style={styles.headerTitleStyle} iosBarStyle="light-content">
              <Left>
                <Button
                  transparent
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Icon name="ios-arrow-back" style={styles.headerIconStyle} />
                </Button>
              </Left>
              <Body style={{ flex: 4 }}>
                <Text style={{ color: "#fff", fontSize: 18 }}>
                
                  Weather @ Current Location
                </Text>
              </Body>

              <Right>
                <Icon
                  name="md-thermometer"
                  style={{ color: "#fff", fontSize: 30 }}
                />
              </Right>
            </Header>
            <View style={styles.horizontalLine} />

            {view}
          </Content>
        </ImageBackground>
        <Footer>
          <FooterTab>
            <Button
              active={this.state.activeToday}
              onPress={() =>
                this.setState({
                  isToday: true,
                  activeForecast: false,
                  activeToday: true
                })
              }
            >
              <Icon active name="ios-home" />
              <Text>Today</Text>
            </Button>
            <Button
              vertical
              active={this.state.activeForecast}
              onPress={() =>
                this.setState({
                  isToday: false,
                  activeForecast: true,
                  activeToday: false
                })
              }
            >
              <Icon name="ios-cloud" />
              <Text>Forecast</Text>
            </Button>

            <Button vertical>
              <Icon name="ios-search" />
              <Text>Search</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Weather;
