// import React, { Component } from "react";
// import { Image, Text, ImageBackground, View, google } from "react-native";
// import {
//   Form,
//   Input,
//   Item,
//   Label,
//   Content,
//   Button,
//   Left,
//   Body,
//   Right
// } from "native-base";
// import Utils from "../../utils";
// // import styles from "./styles";
// const mapKey = "AIzaSyBV15wo_7ixHr8gPnXNB-32KiDU4yuoTZQ";
// const locURL =
//   "https://maps.googleapis.com/maps/api/js?key=mapKey&libraries=places,geometry";
// const searchBox = new google.maps.places.SearchBox(querySelector("city"));

// class SearchView extends Component {
//   constructor(props) {
//     super(props);
//     this.data = props.data;
//     this.state = {
//       text: ""
//     };
//   }

//   handleSearch = place => {
//     locale = searchBox.getPlaces(place)[0];
//     querySelector("lat").value = place.geometry.location.lat();
//     querySelector("lon").value = place.geometry.location.lng();
//   };

//   //   formatDateTime = unixTimeStamp => {
//   //     jsTimeStamp = unixTimeStamp * 1000;
//   //     date = new Date(jsTimeStamp);

//   //     return {
//   //       day: Utils.weekday[date.getDay()].toUpperCase(),
//   //       dateMonth: Utils.month[date.getMonth()] + " " + date.getDate()
//   //     };
//   //   };

//   render() {
//     const { iconId, data } = this.props;

//     //   formattedDate = this.formatDateTime(this.data.time);
//     //   maxTemp = Math.round(this.data.temperatureHigh * 10)/10;
//     //   minTemp = Math.round(this.data.temperatureLow * 10)/10;
//     // curTemp = Math.round(data.temperature * 10) / 10;
//     // humidity = data.humidity;

//     return (
//       <View style={styles.container}>
//         <Form>
//           <Item floatingLabel>
//             <Label>City Name</Label>
//             <Input
//               name="city"
//               placeholder="e.g. Baltimore"
//               onChangeText={text => this.handleSearch(text)}
//               value={this.state.text}
//               underlineColorAndroid="transparent"
//             />
//           </Item>
//           <Item disabled>
//             <Label>Lattitude</Label>
//             <Input name="lat" disabled placeholder="39.344" />
//           </Item>
//           <Item disabled last>
//             <Label>Longitude</Label>
//             <Input name="lon" disabled placeholder="e.g. -76.58" />
//           </Item>
//           <Button transparent onPress={() => this._getForecast(lat, lon)}>
//             <Text>Get Weather</Text>
//           </Button>
//         </Form>
//       </View>
//     );
//   }
// }

// const styles = {
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "transparent",
//     marginTop: 80,
//     marginLeft: 20
//   },

//   headerTitleStyle: {
//     flex: 4,
//     flexDirection: "row",
//     alignSelf: "center",
//     // alignItems: 'flex-start',
//     justifyContent: "center",
//     backgroundColor: "#f47937"
//   },
//   text: {
//     alignSelf: "flex-start",
//     marginBottom: 7,
//     fontSize: 20,
//     color: "#ffffff"
//     // marginTop: 5,
//     // paddingVertical: 10,
//   },
//   dateContainer: {
//     alignItems: "center",
//     marginRight: 20
//   },
//   headerIconStyle: {
//     color: "#fff",
//     fontSize: 30
//   },

//   icon: {
//     width: 75,
//     height: 75,
//     marginRight: 20,
//     paddingHorizontal: 20
//   },
//   tempContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start"
//   },
//   darkText: {
//     fontSize: 18
//   },
//   lightText: {
//     flex: 1,
//     flexWrap: "wrap",
//     color: "#9a9a9a"
//   },
//   slightMargin: {
//     marginRight: 1
//   },
//   main: {
//     flex: 5,
//     flexDirection: "row"
//   },
//   mainLeft: {
//     flex: 10,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   mainRight: {
//     flex: 4,
//     alignItems: "flex-start"
//     // justifyContent: "space-between",
//     // paddingVertical: 5
//   },
//   sectionLg: {
//     flex: 3,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20
//   },
//   sectionSm: {
//     flex: 3,
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     paddingHorizontal: 20
//   },
//   widget: {
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   footer: {
//     flex: 9,
//     justifyContent: "center",
//     alignItems: "stretch",
//     padding: 30
//   },
//   location: {
//     fontSize: 16,
//     // fontFamily: "Abel",
//     color: "#736A51",
//     letterSpacing: 1
//   },
//   date: {
//     fontSize: 16,
//     // fontFamily: "Abel",
//     color: "#736A51",
//     letterSpacing: 1
//   },
//   temperature: {
//     fontSize: 120,
//     // fontFamily: "BigJohn",
//     color: "#ffffff",
//     backgroundColor: "transparent",
//     textAlign: "justify",
//     lineHeight: 170,
//     letterSpacing: -5
//   },
//   degree: {
//     fontSize: 40,
//     // fontFamily: "Abel",
//     color: "#ffffff",
//     paddingVertical: 40,
//     lineHeight: 36
//   },
//   minMax: {
//     fontSize: 15,
//     // fontFamily: "Abel",
//     color: "#ffffff",
//     paddingVertical: 10,
//     letterSpacing: 1
//   },
//   minMaxArrow: {
//     color: "#FF9F29"
//   },
//   weatherDescription: {
//     fontSize: 20,
//     // fontFamily: "Abel",
//     color: "#ffffff",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     letterSpacing: 3
//   },
//   weatherIcon: {
//     fontSize: 50,
//     // fontFamily: "WeatherIcons",
//     // color: "#FF9F29",
//     lineHeight: 75,
//     paddingHorizontal: 20
//   },
//   widgetValue: {
//     fontSize: 22,
//     // fontFamily: "Abel-Regular",
//     color: "#736A51",
//     paddingBottom: 5,
//     letterSpacing: 1
//   },
//   widgetUnit: {
//     color: "#FF9F29",
//     letterSpacing: 1
//   },
//   widgetLabel: {
//     fontSize: 12,
//     // fontFamily: "Abel",
//     color: "#ffffff",
//     letterSpacing: 4,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// };

// export default TodayView;
