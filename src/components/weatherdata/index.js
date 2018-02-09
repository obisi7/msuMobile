import React, { Component } from "react";
import { TouchableOpacity, Image, View } from "react-native";
import moment from "moment";
import {
  Container,Header,Title,
  Content,Card,CardItem,Button,Thumbnail,
  Text,Left,Body,Right,List,ListItem
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import Utils from "../../utils";
// import  { ContentSnippet } from "../helper/";
import styles from "./styles";

// const IconNames = {
//   clear: "ios-sunny",
//   rain: "md-rainy",
//   thunderstorm: "md-thunderstorm",
//   cloudy: "md-cloudy",
//   snow: "md-snow",
//   fog: "md-umbrella"
// };

class WeatherData extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;

  }

    formatDateTime = (unixTimeStamp) => {
        jsTimeStamp = unixTimeStamp * 1000;
        date = new Date(jsTimeStamp);

        return {
            day: Utils.weekday[date.getDay()].toUpperCase(),
            dateMonth: Utils.month[date.getMonth()] + " " + date.getDate()
        };
    };


  render() {

    formattedDate = this.formatDateTime(this.data.dt);
    // const iconURL = 'http://openweathermap.org/img/';
    // const { iconId } = this.props;
    // day = moment(weekday[idx]).format("dddd");
    // dayChar = day.toString();
    maxTemp = Math.round(this.data.main.temp_max * 10)/10;
    minTemp = Math.round(this.data.main.temp_min * 10)/10;
    curTemp = Math.round(this.data.main.temp * 10)/10;
    humidity= this.data.main.humidity;
    // dateString = this.formatDateTime(this.data.dt);

    return (
      <Card>
        <CardItem style={styles.Container}>
            <View style={styles.dateContainer}>
              <Text style={styles.darkText}>{formattedDate.day}</Text>
              <Text style={styles.lightText}>{formattedDate.dateMonth}</Text>
            </View>
          <Image style={styles.icon} source={{ uri: Utils.getIconUrl(this.data.weather[0].icon)}}/>

          <View>

              <View style={styles.tempContainer}>
                <Text style={styles.darkText}> Hi: {maxTemp}°F</Text>
                  <Text style={styles.darkText}>/</Text>
                <Text style={[styles.darkText, styles.slightMargin]}> Lo: {minTemp}°F</Text>
                {/*<Text> ↑ {this.data.main.temp_max}°F</Text>*/}
                    {/*<Text> ↓ {this.data.main.temp_min}°F</Text>*/}
              </View>
            <Text style={styles.lightText}>Forecast: {this.data.weather[0].description}</Text>
            <Text style={styles.lightText}>Humidity: {humidity}%</Text>
          </View>

        </CardItem>
      </Card>
    );
  }
}
export default WeatherData;
