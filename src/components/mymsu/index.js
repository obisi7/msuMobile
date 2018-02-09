import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Dimensions,
  Modal,
  WebView,
  Share,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  Content,
  Container,
  Body,
  Left,
  Right,
  Text,
  Title,
  Button,
} from 'native-base';
// import styles from "./styles";

const webViewHeight = Dimensions.get('window').height - 56;

class MyMSU extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClose = () => {
    this.props.navigation.goBack();
  }

  render() {
    // const link = 'http://my.morgan.edu';
    return (
      <Modal
        onRequestClose={this.handleClose}
        // visible={showModal}
        transparent
        animationType="slide"
      >
        <Container
          style={{ margin: 0, marginBottom: 0, backgroundColor: '#ffffff' }}
        >
          <Content contentContainerStyle={{ height: webViewHeight }}>
            <Header style={{backgroundColor: '#1b4383'}} iosBarStyle='light-content'>
              <Left>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Icon
                    name="close"
                    style={{ fontSize: 30, color: '#f47937' }}
                  />
                </TouchableOpacity>
              </Left>
              <Body>
                <Title style={{color: '#ffffff'}}>My MSU </Title>
              </Body>
              <Right>
                {/* <TouchableOpacity>
                  <Icon
                    name="share"
                    style={{ fontSize: 30, color: '#f47937' }}
                  />
                </TouchableOpacity> */}
              </Right>
            </Header>
            <WebView
              onError={this.handleClose}
              scalesPageToFit
              source={{ uri: 'http://my.morgan.edu' }}
            />
          </Content>
        </Container>
      </Modal>
    );
  }
}

export default MyMSU;
