import React, { Component } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Content,
  Text,
  List,
  ListItem,
  Container,
  Left,
  Right,
  Badge,
  Button,
  View,
  Separator,
  StyleProvider,
  getTheme,
  variables,
} from 'native-base';

import styles from './style';

const drawerCover = require('../../img/bg4.png');

// const drawerImage = require("../../../img/logo-kitchen-sink.png");

const datas = [
  {
    name: 'Home',
    route: 'Home',
    icon: 'home',
  },
  {
    name: 'Login',
    route: 'Login',
    icon: 'sign-in',
  },
  {
    name: 'Chat',
    route: 'Chat',
    icon: 'calendar',
  },
  {
    name: 'Facebook',
    route: 'Facebook',
    icon: 'facebook',
  },
  {
    name: 'Twitter',
    route: 'Twitter',
    icon: 'twitter',
  },
  {
    name: 'Instagram',
    route: 'Instagram',
    icon: 'instagram',
  },
  {
    name: 'Share',
    route: 'Share',
    icon: 'share',
  },
  {
    name: 'News',
    route: 'News',
    icon: 'rss',
  },
  {
    name: 'Info',
    route: 'Info',
    icon: 'info',
  },
  {
    name: 'Logout',
    route: 'Logout',
    icon: 'stop',
  },

];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  render() {
    return (
      <Container>
        <Content bounces style={{ flex: 1, backgroundColor: '#fff', top: -1 }}>
          <Image source={drawerCover} style={styles.drawerCover}>
            {/* <Image square style={styles.drawerImage} source={drawerImage} /> */}
          </Image>
          <List
            dataArray={datas}
            renderRow={data =>
  (<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
    <Left>
      <Icon active name={data.icon} style={{ color: '#777', fontSize: 26, width: 30 }} />
      <Text style={styles.text}>
        {data.name}
      </Text>
    </Left>

  </ListItem>)}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
