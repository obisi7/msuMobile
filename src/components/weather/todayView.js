import React, { Component } from "react";
import { Image, ImageBackground, View, PixelRatio } from "react-native";
import {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Card,
  CardItem,
  Button,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";
import Utils from "../../utils";
// import styles from "./styles";

if (PixelRatio.get() <= 2) {
  temperatureFontSize = 120;
  temperatureLineHeight = 170;
}

class TodayView extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  formatDateTime = unixTimeStamp => {
    jsTimeStamp = unixTimeStamp * 1000;
    date = new Date(jsTimeStamp);

    return {
      day: Utils.weekday[date.getDay()].toUpperCase(),
      dateMonth: Utils.month[date.getMonth()] + " " + date.getDate()
    };
  };

  render() {
    const { iconId, data } = this.props;

    //   formattedDate = this.formatDateTime(this.data.time);
    //   maxTemp = Math.round(this.data.temperatureHigh * 10)/10;
    //   minTemp = Math.round(this.data.temperatureLow * 10)/10;
    // curTemp = Math.round(data.temperature * 10) / 10;
    curTemp = Math.round(data.temperature);
    humidity = Math.round(data.humidity*10)/10;

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.mainLeft}>
            <Text style={styles.temperature} allowFontScaling={true}>
              {curTemp}
            </Text>
          </View>
          <View style={styles.mainRight}>
            <Text style={styles.degree}>°F</Text>
            <View>
              <Text style={styles.text}>
                Currently
              </Text>
              {/* <Text style={styles.minMax}>
                <Text style={styles.minMaxArrow}>↓</Text>
                {curTemp}
                ˚F
              </Text> */}
            </View>
          </View>
        </View>
        <View style={styles.sectionLg}>
        <Image style={styles.icon} source={imageUrl} />
          <Text style={styles.weatherDescription}>{data.summary}</Text>
        </View>
        <View style={styles.sectionSm}>
          <View style={styles.widget}>
            <Text style={styles.widgetValue}>
              {data.windSpeed}
              <Text style={styles.widgetUnit}> m/s</Text>
            </Text>
            <Text style={styles.widgetLabel}>Wind</Text>
          </View>
          <View style={styles.widget}>
            <Text style={styles.widgetValue}>
              {humidity * 100}
              <Text style={styles.widgetUnit}>% </Text>
            </Text>
            <Text style={styles.widgetLabel}>Humidity</Text>
          </View>
          <View style={styles.widget}>
            <Text style={styles.widgetValue}>
              {Math.round(data.pressure)}
              <Text style={styles.widgetUnit}> hpa</Text>
            </Text>
            <Text style={styles.widgetLabel}>Pressure</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    marginTop: 80,
    marginLeft: 20
  },

  headerTitleStyle: {
    flex: 4,
    flexDirection: "row",
    alignSelf: "center",
    // alignItems: 'flex-start',
    justifyContent: "center",
    backgroundColor: "#f47937"
  },
  text: {
    alignSelf: "flex-start",
    marginBottom: 7,
    fontSize: 20,
    color: '#ffffff'
    // marginTop: 5,
    // paddingVertical: 10,
  },
  dateContainer: {
    alignItems: "center",
    marginRight: 20
  },
  headerIconStyle: {
    color: "#fff",
    fontSize: 30
  },

  icon: {
    width: 75,
    height: 75,
    marginRight: 20,
    paddingHorizontal: 20
  },
  tempContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  darkText: {
    fontSize: 18
  },
  lightText: {
    flex: 1,
    flexWrap: "wrap",
    color: "#9a9a9a"
  },
  slightMargin: {
    marginRight: 1
  },
  main: {
    flex: 5,
    flexDirection: "row"
  },
  mainLeft: {
    flex: 5,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  mainRight: {
    flex: 3,
    alignItems: "flex-start",
    // justifyContent: "space-between",
    // paddingVertical: 5
  },
  sectionLg: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  sectionSm: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 2,
    marginRight: 5,
    alignItems: "center",
    // paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    
  },
  widget: {
    justifyContent: "center",
    alignItems: "center",
    
  },
  footer: {
    flex: 9,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 30
  },
  location: {
    fontSize: 16,
    // fontFamily: "Abel",
    color: "#736A51",
    letterSpacing: 1
  },
  date: {
    fontSize: 16,
    // fontFamily: "Abel",
    color: "#736A51",
    letterSpacing: 1
  },
  temperature: {
    fontSize: 120,
    // fontFamily: "BigJohn",
    color: "#ffffff",
    backgroundColor: "transparent",
    textAlign: "justify",
    lineHeight: 170,
    letterSpacing: -5
  },
  degree: {
    fontSize: 40,
    // fontFamily: "Abel",
    color: "#ffffff",
    paddingVertical: 40,
    lineHeight: 36
  },
  minMax: {
    fontSize: 15,
    // fontFamily: "Abel",
    color: "#ffffff",
    paddingVertical: 10,
    letterSpacing: 1
  },
  minMaxArrow: {
    color: "#FF9F29"
  },
  weatherDescription: {
    fontSize: 20,
    // fontFamily: "Abel",
    color: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    letterSpacing: 3
  },
  weatherIcon: {
    fontSize: 50,
    // fontFamily: "WeatherIcons",
    // color: "#FF9F29",
    lineHeight: 75,
    paddingHorizontal: 20
  },
  widgetValue: {
    fontSize: 22,
    // fontFamily: "Abel-Regular",
    color: "#736A51",
    paddingBottom: 5,
    letterSpacing: 1
  },
  widgetUnit: {
    color: "#ff0000",
    letterSpacing: 1
  },
  widgetLabel: {
    fontSize: 12,
    // fontFamily: "Abel",
    color: "#0000ff",
    letterSpacing: 4,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default TodayView;
