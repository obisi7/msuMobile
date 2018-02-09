// import RNAudioStreamer from 'react-native-audio-streamer';
//
//
// RNAudioStreamer.setUrl('http://lacavewebradio.chickenkiller.com:8000/stream.mp3')
// RNAudioStreamer.play()
// RNAudioStreamer.pause()
// RNAudioStreamer.seekToTime(16) //seconds
// RNAudioStreamer.duration((err, duration)=>{
//     if(!err) console.log(duration) //seconds
// })
// RNAudioStreamer.currentTime((err, currentTime)=>{
//     if(!err) console.log(currentTime) //seconds
// })
//
// // Player Status:
// // - PLAYING
// // - PAUSED
// // - STOPPED
// // - FINISHED
// // - BUFFERING
// // - ERROR
// RNAudioStreamer.status((err, status)=>{
//     if(!err) console.log(status)
// })
//
// const {
//     DeviceEventEmitter
// } = 'react-native'
//
// // Status change observer
// componentDidMount() {
//     this.subscription = DeviceEventEmitter.addListener('RNAudioStreamerStatusChanged',this._statusChanged.bind(this))
// }
//
// // Player Status:
// // - PLAYING
// // - PAUSED
// // - STOPPED
// // - FINISHED
// // - BUFFERING
// // - ERROR
// _statusChanged(status) {
//     // Your logic
// }

// import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
//
// const url = "http://lacavewebradio.chickenkiller.com:8000/stream.mp3";
// ReactNativeAudioStreaming.pause();
// ReactNativeAudioStreaming.resume();
// ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
// ReactNativeAudioStreaming.stop();
//
// import { Player } from 'react-native-audio-streaming';
//
// class PlayerUI extends Component {
//     render() {
//         return (
//             <Player url={"http://lacavewebradio.chickenkiller.com:8000/stream.mp3"} />
//         );
//     }
// }
//
// export default PlayerUI;

// Backup code for News (index.js) as of Dec 23, 2017
//
//
// import  React, { Component } from "react";
//
// import {
//     Container,
//     Header,
//     Title,
//     Content,
//     Card,
//     CardItem,
//     Button,
//     Icon,
//     Thumbnail,
//     Text,
//     Left,
//     Body,
//     Right,
//     List,
//     ListItem
// } from "native-base";
//
//
// import Newsdata from "../newsdata"; // import disabled for now until newsData component integration works
//
//
// class News extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             news: [],
//             loading: false,
//             refreshing: false,
//             error: null
//         };
//     }
//
//
//     getNews() {
//
//         const link = 'https://feeds.feedburner.com/morganstateu';
//         const parseString = require('react-native-xml2js').parseString; // convert fetched xml data into a json object
//         let resJson = [];
//
//         return fetch(link)
//             .then(response => response.text())
//             .then((response) => {
//
//                 parseString(response, function (err, result) {
//
//                     resJson = result; // local var result saved to a global var resJson for later use
//
//
//                 });
//
//                 this.setState({
//                     news: resJson.rss.channel[0].item,
//                     loading: false,
//                     refreshing: false,
//                     error: response.error || null
//
//                 });
//
//
//             }).catch((error) => {
//                 this.setState({ error, loading: false });
//                 console.log('fetch', error)
//             });
//
//     }
//
//     componentDidMount() {
//         this.getNews();
//     }
//
//
//     render() {
//         return(
//             <Newsdata news = {this.state.news} navigation={this.props.navigation} />
//
//         );
//
//
//     }
// }
//
// export default News;

