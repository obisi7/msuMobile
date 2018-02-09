import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
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

// import TimeAgo from 'react-native-timeago';
import { GetImage } from "../helper/";
import styles from "./styles";

class VideoData extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  _handlePress = () => {
    const youtubeId = this.data.id.videoId;
    const videoTitle = this.data.snippet.title;
    // const { youtubeId, title } = this.props;
    this.props.onPress({ youtubeId, videoTitle });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this._handlePress}
        style={{ flexDirection: "row" }}
        activeOpacity={0.5}
      >
        <Image
          source={{ uri: this.data.snippet.thumbnails.medium.url }}
          style={{ width: 80, height: 45 }}
        />
        <Body style={styles.myListStyle}>
          <Text>{this.data.snippet.title}</Text>

          {/*<Text note>Posted: {<TimeAgo time={this.data.pubDate.toString()}/>} </Text>*/}
        </Body>
        <Right>
          <Button transparent>
            <Icon name="angle-right" style={{ fontSize: 30 }} />
          </Button>
        </Right>
      </TouchableOpacity>
    );
  }
}
export default VideoData;
