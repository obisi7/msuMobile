import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Left,
  Right,
  Content,
} from 'native-base';
import style from './styles';

class AppFooter extends Component {
  render() {
    return (

      <Footer>
        <FooterTab>
          <Button active>
            <Icon active name="home" />
            <Text>Today</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Tomorrow</Text>
          </Button>
          <Button vertical >
            <Icon name="navigate" />
            <Text>7-Day</Text>
          </Button>
          <Button vertical>
            <Icon name="search" />
            <Text>Search</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default AppFooter;
