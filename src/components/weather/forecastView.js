import React, { Component } from "react";
import {  Image, View } from "react-native";
import {
    Container,Header,Title,Icon,
    Content,Card,CardItem,Button,Thumbnail,
    Text,Left,Body,Right,List,ListItem
} from "native-base";
import Utils from "../../utils";
import styles from "./styles";

// const IconNames = {
//   clear: "ios-sunny",
//   rain: "md-rainy",
//   thunderstorm: "md-thunderstorm",
//   cloudy: "md-cloudy",
//   snow: "md-snow",
//   fog: "md-umbrella"
// };

class ForecastView extends Component {
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

        const { iconId } = this.props;
        // iconId = this.data.icon;

        formattedDate = this.formatDateTime(this.data.time);
        maxTemp = Math.round(this.data.temperatureHigh * 10)/10;
        minTemp = Math.round(this.data.temperatureLow * 10)/10;
        humidity= this.data.humidity;

        switch (iconId) {

            case 'clear-day':
                imageUrl = require('../../img/weatherIcons/clear-day.png');
                break;
            case    'clear-night':
                imageUrl = require('../../img/weatherIcons/clear-night.png');
                break;
            case 'cloudy-day':
                imageUrl = require('../../img/weatherIcons/cloudy-day.png');
                break;
            case 'cloudy-night':
                imageUrl = require('../../img/weatherIcons/cloudy-night.png');
                break;
            case 'partly-cloudy-day':
                imageUrl = require('../../img/weatherIcons/partly-cloudy-day.png');
                break;
            case 'partly-cloudy-night':
                imageUrl = require('../../img/weatherIcons/partly-cloudy-night.png');
                break;
            case 'rain':
                imageUrl = require('../../img/weatherIcons/rain.png');
                break;
            case 'sleet':
                imageUrl = require('../../img/weatherIcons/sleet.png');
                break;
            case 'fog':
                imageUrl = require('../../img/weatherIcons/fog.png');
                break;
            case 'wind':
                imageUrl = require('../../img/weatherIcons/wind.png');
                break;

            case 'snow':
                imageUrl = require('../../img/weatherIcons/snowflake.png');
                break;
            case 'thunderstorm':
                imageUrl = require('../../img/weatherIcons/thunderstorm.png');
                break;
            default:
                imageUrl = require('../../img/weatherIcons/clear-day.png');
        }

        return (

            <Card style={{ backgroundColor: '#cde1f9' }}>
              <CardItem>
                <View style={styles.dateContainer}>
                  <Text style={styles.darkText}>{formattedDate.day}</Text>
                  <Text style={styles.lightText}>{formattedDate.dateMonth}</Text>
                </View>

                  <Image style={styles.icon} source={imageUrl}/>
                <View style={{ flex:1, flexWrap:'wrap'}}>

                  <View style={styles.tempContainer}>
                    <Text style={styles.darkText}> Hi: {maxTemp}°F</Text>
                    <Text style={styles.darkText}>/</Text>
                    <Text style={[styles.darkText, styles.slightMargin]}> Lo: {minTemp}°F</Text>

                  </View>
                  <Text numberOfLines={2} style={styles.lightText}>{this.data.summary}</Text>
                  <Text style={styles.lightText}>Humidity: {humidity}%</Text>
                </View>

              </CardItem>
            </Card>
            
        );
    }
}
export default ForecastView;
