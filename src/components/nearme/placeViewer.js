import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Dimensions,
  Modal,
  WebView,
  Share,
  TouchableOpacity
} from "react-native";

import {
  Header,
  Content,
  Container,
  Body,
  Left,
  Right,
  Title,
  Button
} from "native-base";
// import styles from "./styles";

const webViewHeight = Dimensions.get("window").height - 56;

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  _handleClose = () => {
    return this.props.onClose();
  };

  _handleShare = (clickedLink, clickedTitle) => {
    // const { link,title } = this.props.data;
    message = `${clickedTitle}\n\nRead more @\n${clickedLink.toString()}\n\nshared via MSU mobile`;
    return Share.share(
      { clickedTitle, message, url: message },
      { dialogTitle: `Share ${clickedTitle}` }
    );
  };

  render() {
    const { showModal, articleData } = this.props;
    const { photoURL, place } = articleData;
    if (photoURL !== undefined) {
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
                    children={articleData.name}
                    style={{ color: "#ffffff" }}
                  />
                </Body>
                <Right>
                  <TouchableOpacity
                    onPress={() =>
                      this._handleShare(articleData.photoURL, articleData.name)
                    }
                  >
                    <Icon
                      name="share"
                      style={{ fontSize: 30, color: "#f47937" }}
                    />
                  </TouchableOpacity>
                </Right>
              </Header>
              <WebView
                onError={this._handleClose}
                startInLoadingState
                scalesPageToFit
                source={{ uri: photoURL.toString() }}
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
