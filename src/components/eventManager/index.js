// import React, { Component } from 'react';
// import {
//     Text,
//     View,
//     TouchableOpacity,
//     StatusBar
// } from 'react-native';
// import styles from './styles';
// import {Calendar} from 'react-native-calendars';
//
// export default class EventManager extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//         this.onDayPress = this.onDayPress.bind(this);
//     }
//     onDayPress(day) {
//         this.setState({
//             selected: day.dateString
//         });
//         this.props.navigation.navigate('Slot', { bookingDate : day })
//     }
//     _onPressBack(){
//         const {goBack} = this.props.navigation
//         goBack()
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <StatusBar barStyle="light-content"/>
//                 <View style={Commonstyle.toolbar}>
//                     <TouchableOpacity onPress={() => this._onPressBack() }><Text style={Commonstyle.toolbarButton}>Back</Text></TouchableOpacity>
//                     <Text style={Commonstyle.toolbarTitle}></Text>
//                     <Text style={Commonstyle.toolbarButton}></Text>
//                 </View>
//                 <Calendar
//                     onDayPress={this.onDayPress}
//                     style={styles.calendar}
//                     hideExtraDays
//                     markedDates={{[this.state.selected]: {selected: true}}}
//                     theme={{
//                         selectedDayBackgroundColor: 'green',
//                         todayTextColor: 'green',
//                         arrowColor: 'green',
//                     }}
//                 />
//             </View>
//         );
//     }
// }
//
