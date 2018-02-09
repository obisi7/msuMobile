// import React, { Component } from "react";
// import { View, TouchableOpacity } from 'react-native';
//
// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Button,
//   Icon,
//   Thumbnail,
//   Text,
//   Body,
//   Left,
//   Right
// } from "native-base";
//
// import {
//     shareOnFacebook,
//     shareOnTwitter,
// } from 'react-native-social-share';
//
//
// import styles from "./styles";
//
//
// class ReactNativeSocialShare  extends Component {
//
//     tweet() {
//
//         shareOnTwitter({
//                 'text': 'Maryland Eminent Urban Public Research University',
//                 'link': 'https://www.morgan.edu//',
//                 // 'imagelink': 'https://artboost.com/apple-touch-icon-144x144.png',
//                 //or use image
//                 'image': 'msulogo.png',
//             },
//             (results) => {
//                 console.log(results);
//             }
//         );
//     }
//
//     facebookShare () {
//
//         shareOnFacebook({
//                 'text': 'Maryland Eminent Urban Public Research University',
//                 'link':'https://www.morgan.edu/',
//                 // 'imagelink':'https://artboost.com/apple-touch-icon-144x144.png',
//                 //or use image
//                 'image': 'msulogo.png',
//             },
//             (results) => {
//                 console.log(results);
//             }
//         );
//
// }
//
//   render() {
//       return (
//           <View style={styles.container}>
//               <Text style={styles.welcome}>
//                   Twitter and Facebook share
//               </Text>
//
//               <Text style={styles.instructions}>
//                   Try tapping one of the buttons
//               </Text>
//
//               <View style={styles.seperator}/>
//
//               <TouchableOpacity onPress={this.tweet}>
//                   <View style={{alignItems: 'center',justifyContent:'center', width: 150, height: 50,backgroundColor:'#00aced'}}>
//                       <Text style={{color:'#ffffff',fontWeight:'800',}}>Share on Twitter</Text>
//                   </View>
//               </TouchableOpacity>
//
//               <View style={styles.seperator}/>
//
//               <TouchableOpacity onPress={this.facebookShare}>
//                   <View style={{alignItems: 'center',justifyContent:'center', width: 150, height: 50,backgroundColor:'#3b5998'}}>
//                       <Text style={{color:'#ffffff',fontWeight:'800',}}>Share on Facebook</Text>
//                   </View>
//               </TouchableOpacity>
//           </View>
//
//
//       );
//   }
// }
//
// export default ReactNativeSocialShare;
