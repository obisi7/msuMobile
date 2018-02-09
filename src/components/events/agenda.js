import React, { Component } from "react";
import { Text, View } from "react-native";
import { Agenda } from "react-native-calendars";
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  Button,
  Left,
  Body,
  Right
} from "native-base";
// import styles from "./styles";

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  timeToString = time => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  };

  loadItems = day => {
    
      // newItems = {
      //   "2018-01-22": [{ text: "item 1 - any js object" }],
      //   "2018-01-23": [{ text: "item 2 - any js object" }],
      //   "2018-01-24": [],
      //   "2018-01-25": [
      //     { text: "item 3 - any js object" },
      //     { text: "any js object" }
      //   ]
      // };
      // height: Math.max(50, Math.floor(Math.random() * 150))
      this.setState({
        items: {
          "2018-01-25": [{ title: "Combine events in one" }],
          "2018-01-27": [{ title: "item 1 - any js object" }],
          "2018-01-29": [
            { title: "WebSIS issue" },
            { title: "Place: CGW 236" },
            { title: "Time: 9 - 10 am" }
          ],
          "2018-01-30": [],
          "2018-01-31": [
            { title: "New Board Orientation" },
            { title: "Place: ESR Library Board Room" },
            { title: "Tiem: 1:00 - 3:30 pm" }
          ]
        }
      });
    // console.log(`Load Items for ${day.year}-${day.month}`);
  };

  // loadItems = day => {
  //   setTimeout(() => {
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = this.timeToString(time);
  //       if (!this.state.items[strTime]) {
  //         this.state.items[strTime] = [];
  //         const numItems = Math.floor(Math.random() * 5);
  //         for (let j = 0; j < numItems; j++) {
  //           this.state.items[strTime].push({
  //             title: ` ${strTime}`,
  //             height: Math.max(50, Math.floor(Math.random() * 150))
  //           });
  //         }
  //       }
  //     }
  //     // console.log(this.state.items);
  //     const newItems = {};
  //     Object.keys(this.state.items).forEach(key => {
  //       newItems[key] = this.state.items[key];
  //     });
  //     this.setState({
  //       items: {
  //                 "2018-01-25": [{ title: "Why is event misplaced?" }],
  //                 "2018-01-27": [{ title: "item 1 - any js object" }],
  //                 "2018-01-29": [
  //                   { title: "WebSIS issue" },
  //                   { title: "CGW 236" },
  //                   { title: "9 am" }
  //                 ],
  //                 "2018-01-30": [],
  //                 "2018-01-31": [
  //                   { title: "New Board orientation" },
  //                   { title: "Place: ESR Library Board Room" },
  //                   { title: "1:00 - 3:30 pm" }
  //                 ]
  //               }
  //     });
  //   }, 1000);
  //   // console.log(`Load Items for ${day.year}-${day.month}`);
  // };

  rowHasChanged = (r1, r2) => {
    return r1.title !== r2.title;
    // return (r1.title !== r2.title || r1.loc !== r2.loc || r1.time !== r2.time);
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>No event on this date!</Text>
      </View>
    );
  };

  renderItem = item => {
    return (
      // <View style={[styles.item, { height: item.height }]}>
      <View style={styles.item}> 
        <Text>{item.title}</Text>
        {/* <Text>{item.loc}</Text>
        <Text>{item.time}</Text> */}
      </View>
    );
  };
  render() {
    return (
      <Container style={styles.container}>
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
            <Body>
              <Text style={{ color: "#fff", fontSize: 15 }}>
                {" "}
                Activities
              </Text>
            </Body>

            <Right>
              <Icon
                name="md-calendar"
                style={{ color: "#fff", fontSize: 30 }}
              />
            </Right>
          </Header>
          <View style={styles.horizontalLine} />
          <Agenda
            items={this.state.items}
            loadItemsForMonth={this.loadItems}
            // loadItemsForMonth={(month) => {this.loadItems}}
            selected="2018-01-27"
            // renderItem={(item, firstItemInDay) => {return (<View />);}}
            renderItem={this.renderItem}
            renderEmptyDate={this.renderEmptyDate}
            rowHasChanged={this.rowHasChanged}
            // onDayPress={(day)=>{console.log('day pressed')}}
            // markingType={'period'}
            // markedDates={{
            //    '2017-05-08': {textColor: '#666'},
            //    '2017-05-09': {textColor: '#666'},
            //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
            //    '2017-05-21': {startingDay: true, color: 'blue'},
            //    '2017-05-22': {endingDay: true, color: 'gray'},
            //    '2017-05-24': {startingDay: true, color: 'gray'},
            //  '2017-05-25': {color: 'gray'},
            //  '2017-05-26': {endingDay: true, color: 'gray'}}}
            // monthFormat={'yyyy'}
            theme={{
              calendarBackground: "#ffffff",
              agendaKnobColor: "#0000ff",
              agendaDayNumColor: '#000000',
              textSectionTitleColor: "#0000ff",
              selectedDayBackgroundColor: "#f47937",
              todayTextColor: "#ff0000",
              selectedDotColor: "#ffffff",
              agendaTodayColor: "#ff0000",
              agendaDayTextColor: '#0000ff',
              dayTextColor: '#f47937'
            }}
            // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
          />
          
        </Content>
      </Container>
    );
  }
}
const styles = {
  headerTitleStyle: {
    flex: 4,
    flexDirection: "row",
    alignSelf: "center",
    // alignItems: 'flex-start',
    justifyContent: "center",
    backgroundColor: "#f47937"
  },
  horizontalLine: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 1
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  text: {
    alignSelf: "center",
    marginBottom: 7,
    fontSize: 20,
    color: "#1b4383"
  },
  dateContainer: {
    alignItems: "center",
    marginRight: 20
  },
  headerIconStyle: {
    color: "#fff",
    fontSize: 30
  }
};
