import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Button,
  Thumbnail,
  Item,
  Input,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import YoutubeViewer from "../youtubeView";
import VideoData from "../videodata/index";

// import API from '../../API';

// import {
//     Linking,
// } from 'react-native';

// const Videos = () => {
//     const url = 'https://www.youtube.com/user/morganstateu/videos';
// MSU Youtube Channel ID: UCfoJQdkPml849T5X7kPVZZA
//
//
//        return Linking.canOpenURL(url).then(supported => {
//             if (!supported) {
//                 console.log('Can\'t handle url: ' + url);
//             } else {
//                 return Linking.openURL(url);
//             }
//         }).catch(err => console.error('An error occurred', err))
//
// };

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: [],
      isLoading: true,
      refreshing: false,
      isError: false,
      text: "",
      setModalVisible: false,
      modalArticleData: {},
      error: null
    };
  }

  _handleItemDataOnPress = articleData => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  };

  _handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  };

  _handleSearch = e => {
    let text = e.toLowerCase();
    let fullList = this.state.data;
    let filteredList = fullList.filter(item => {
      // search from a full list, and not from a previous search results list
      if (
        item.title
          .toString()
          .toLowerCase()
          .match(text)
      )
        return item;
    });
    if (!text || text === "") {
      this.setState({
        data: fullList,
        noData: false
      });
    } else if (!filteredList.length) {
      // set no data flag to true so as to render flatlist conditionally
      this.setState({
        noData: true
      });
    } else if (Array.isArray(filteredList)) {
      this.setState({
        noData: false,
        data: filteredList
      });
    }
  };

  componentDidMount() {
    //https://www.googleapis.com/youtube/v3/search?key="+'UCfoJQdkPml849T5X7kPVZZA'+"&channelId=UCfoJQdkPml849T5X7kPVZZA&part=snippet,id&order=date&maxResults=20

    const YOUTUBE_API = "AIzaSyCq3IysjyfDAU_QYursgiYjnxwKp0wPy14";
    return fetch(
      "https://www.googleapis.com/youtube/v3/search?key=" +
        YOUTUBE_API +
        "&channelId=UCfoJQdkPml849T5X7kPVZZA&part=snippet,id&order=date&maxResults=20"
    )
      .then(response => response.json())
      .then(responseJson => {
        // let videoId = [];
        // responseJson.items.forEach(function(item){
        //     videoId.push(item)
        // });
        this.setState(
          {
            isLoading: false,
            videoData: responseJson.items
          },
          function() {
            // do something with new state
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    // console.log(this.state);
    // const {navigate} = this.props.navigation;

    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#f47937"
          fontSize="30"
        />
        <Text
          style={{ marginTop: 10 }}
          children="Please wait... Loading video items"
        />
      </View>
    ) : (
      <FlatList
        data={this.state.videoData}
        extraData={this.state}
        renderItem={({ item }) => (
          <ListItem>
            <VideoData onPress={this._handleItemDataOnPress} data={item} />
          </ListItem>
        )}
        keyExtractor={item => item.id.videoId}
        // refreshing={this.state.refreshing}
        // onRefresh={this.handleRefresh}
      />
    );

    return (
      <Container style={styles.container}>
        <Content>
          <Header
            searchBar
            rounded
            style={styles.headerTitleStyle}
            iosBarStyle="light-content"
          >
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="angle-left" style={styles.headerIconStyle} />
              </Button>
            </Left>
            <Body>
              <Item>
                <Icon name="search" style={{ color: "#fff", fontSize: 25 }} />
                <Input
                  placeholder="Type Here..."
                  onChangeText={text => this._handleSearch(text)}
                  value={this.state.text}
                  underlineColorAndroid="transparent"
                />
              </Item>
            </Body>

            <Right>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Right>
          </Header>
          <View style={styles.horizontalLine} />

          {view}
          <YoutubeViewer
            showModal={this.state.setModalVisible}
            articleData={this.state.modalArticleData}
            onClose={this._handleModalClose}
          />
        </Content>
      </Container>
    );
  }
}

export default Videos;
