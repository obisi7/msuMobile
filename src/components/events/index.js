
// import React, { Component } from "react";
// import { Text, View } from "react-native";
// import { Agenda } from "react-native-calendars";
// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Icon,
//   Button,
//   Left,
//   Body,
//   Right
// } from "native-base";
// // import styles from "./styles";

// export default class AgendaScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: {}
//     };
//   }

//   timeToString = time => {
//     const date = new Date(time);
//     return date.toISOString().split("T")[0];
//   };

//   loadItems = day => {
//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = this.timeToString(time);
//         if (!this.state.items[strTime]) {
//           this.state.items[strTime] = [];
//           const numItems = Math.floor(Math.random() * 5);
//           for (let j = 0; j < numItems; j++) {
//             this.state.items[strTime].push({
//               name: `Item for ${strTime}`,
//               height: Math.max(50, Math.floor(Math.random() * 150))
//             });
//           }
//         }
//       }
//       // console.log(this.state.items);
//       const newItems = {};
//       Object.keys(this.state.items).forEach(key => {
//         newItems[key] = this.state.items[key];
//       });
//       this.setState({
//         items: newItems
//       });
//     }, 1000);
//     // console.log(`Load Items for ${day.year}-${day.month}`);
//   };

//   rowHasChanged = (r1, r2) => {
//     return r1.name !== r2.name;
//   };

//   renderEmptyDate = () => {
//     return (
//       <View style={styles.emptyDate}>
//         <Text>This is empty date!</Text>
//       </View>
//     );
//   };

//   renderItem = item => {
//     return (
//       <View style={[styles.item, { height: item.height }]}>
//         <Text>{item.name}</Text>
//       </View>
//     );
//   };

//   render() {
//     return (
//       <Container style={styles.container}>
//         <Content>
//           <Header style={styles.headerTitleStyle} iosBarStyle="light-content">
//             <Left>
//               <Button
//                 transparent
//                 onPress={() => this.props.navigation.goBack()}
//               >
//                 <Icon name="ios-arrow-back" style={styles.headerIconStyle} />
//               </Button>
//             </Left>
//             <Body>
//               <Text style={{ color: "#fff", fontSize: 15 }}>
//                 {" "}
//                 Event Calendars
//               </Text>
//             </Body>

//             <Right>
//               <Icon
//                 name="md-calendar"
//                 style={{ color: "#fff", fontSize: 30 }}
//               />
//             </Right>
//           </Header>
//           <View style={styles.horizontalLine} />
//           <Agenda
//             items={this.state.items}
//             loadItemsForMonth={this.loadItems}
//             selected="2018-01-24"
//             renderItem={this.renderItem}
//             renderEmptyDate={this.renderEmptyDate}
//             rowHasChanged={this.rowHasChanged}
//             // markingType={'period'}
//             markedDates={{
//             //    '2017-05-08': {textColor: '#666'},
//             //    '2017-05-09': {textColor: '#666'},
//             //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
//             //    '2017-05-21': {startingDay: true, color: 'blue'},
//             //    '2017-05-22': {endingDay: true, color: 'gray'},
//             //    '2017-05-24': {startingDay: true, color: 'gray'},
//                '2017-05-25': {color: 'gray'},
//                '2017-05-26': {endingDay: true, color: 'gray'}}}
//             // monthFormat={'yyyy'}
//             theme={{calendarBackground: 'yellow', agendaKnobColor: 'blue'}}
//             // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
//           />
//         </Content>
//       </Container>
//     );
//   }
// }
// const styles={
//   headerTitleStyle: {
//     flex: 4,
//     flexDirection: 'row',
//     alignSelf: 'center',
//     // alignItems: 'flex-start',
//     justifyContent: 'center',
//     backgroundColor: '#f47937',
//   },
//   horizontalLine: {
//     borderBottomColor: '#000000',
//     borderBottomWidth: 1,
//   },
//   text: {
//     alignSelf: 'center',
//     marginBottom: 7,
//     fontSize: 20,
//     color: '#1b4383',
//   },
//   dateContainer: {
//     alignItems: 'center',
//     marginRight: 20,
//   },
//   headerIconStyle: {
//     color: '#fff',
//     fontSize: 30,
//   },
// }
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
// import { Navigation } from 'react-native-navigation';
// import Scraper from 'webscrape';

// import MenuScreen from './menu';
// import CalendarsScreen from './calendar';
// import AgendaScreen from './agenda';
// import CalendarsList from './calendarList';

// export function registerScreens() {
//   // Navigation.registerComponent('Menu', () => MenuScreen);
//   Navigation.registerComponent('Calendars', () => CalendarsScreen);
//   Navigation.registerComponent('Agenda', () => AgendaScreen);
//   Navigation.registerComponent('CalendarsList', () => CalendarsList);
// }

// const scraper = Scraper();
// const acadCal = 'http://www.morgan.edu/enrollment_management_and_student_success/office_of_the_registrar/academic_calendar/fall_2017-summer_2018.html';

export default class MenuScreen extends Component {
  onCalendarsPress() {
    this.props.navigator.push({
      screen: 'Calendars',
      title: 'Calendars',
    });
  }

  onCalendarListPress() {
    this.props.navigator.push({
      screen: 'CalendarsList',
      title: 'Calendar List',
    });
  }

  onAgendaPress() {
    this.props.navigator.push({
      screen: 'Agenda',
      title: 'Agenda',
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    // let data = [];

    // data = scraper.get(acadCal, { query: { q: 'Agenda' } });
    // console.log(data);

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
              <Text style={{ color: '#fff', fontSize: 15 }}>
                {' '}
                Event Calendars
              </Text>
            </Body>

            <Right>
              <Icon
                name="md-calendar"
                style={{ color: '#fff', fontSize: 30 }}
              />
            </Right>
          </Header>
          <View style={styles.horizontalLine} />
          <View>
            <TouchableOpacity
              style={styles.menu}
              // onPress={this.onCalendarsPress}
              onPress={() => navigate('Calendars')}
            >
              <Text style={styles.menuText}>Academic</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menu}
              onPress={() => navigate('CalendarList')}
            >
              <Text style={styles.menuText}>Athletics</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menu}
              onPress={() => navigate('Agenda')}
            >
              <Text style={styles.menuText}>Activites</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  headerTitleStyle: {
    flex: 4,
    flexDirection: 'row',
    alignSelf: 'center',
    // alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#f47937',
  },
  headerIconStyle: {
    color: '#fff',
    fontSize: 30,
  },
  horizontalLine: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  menu: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 18,
  },
};

