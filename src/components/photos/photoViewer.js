import React, { Component } from "react";
import {
    Dimensions,
    Modal,
    WebView,
    Share,
    TouchableOpacity
} from 'react-native';
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
  ScrollView,
  View,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";

const webViewHeight = Dimensions.get("window").height - 56;

export default class PhotoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  _handleClose = () => {
    return this.props.onClose();
  };

  _handleShare = (clickedLink, clickedTitle) => {
    // const { videoId,title } = this.props.data;
    message = `${clickedTitle}\n\nRead more @\n${clickedLink}\n\nshared via MSU mobile`;
    return Share.share(
      { clickedTitle, message, url: message },
      { dialogTitle: `Share ${clickedTitle}` }
    );
  };

  render() {
    
    const { showModal, photoData } = this.props;
    // console.log(articleData.youtubeId);
    const { image } = photoData;

    return (
      <Modal
        onRequestClose={this._handleClose}
        visible={showModal}
        transparent
        animationType="slide"
      >
        <Container
          style={{ margin: 0, marginBottom: 0, backgroundColor: "#ffffff" }}
        >
          <Content contentContainerStyle={{ height: webViewHeight }}>
            <Header
              style={{ backgroundColor: "#1b4383" }}
              iosBarStyle="light-content"
            >
              <Left>
                <TouchableOpacity onPress={() => this._handleClose()}>
                  <Icon
                    name="close"
                    style={{ fontSize: 30, color: "#f47937" }}
                  />
                </TouchableOpacity>
              </Left>
              <Body>
                <Title
                  children={image}
                  style={{ color: "#ffffff" }}
                />
              </Body>
              <Right>
                <TouchableOpacity
                  onPress={() =>
                    this._handleShare(
                      image,
                      
                    )
                  }
                >
                  <Icon
                    name="share"
                    style={{ fontSize: 30, color: "#f47937" }}
                  />
                </TouchableOpacity>
              </Right>
            </Header>
              
            <WebView onError={this._handleClose} startInLoadingState scalesPageToFit source={{uri:image}}/>
          </Content>
        </Container>
      </Modal>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f5fcff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  buttonGroup: {
    flexDirection: "row",
    alignSelf: "center"
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "blue"
  },
  buttonTextSmall: {
    fontSize: 15
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  player: {
    alignSelf: "stretch",
    marginVertical: 10
  }
};
