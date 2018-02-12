import React, { Component } from 'react';
// import { Drawer, StackNavigator, } from "react-navigation";
import {
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Content,
  Button,
  Grid,
  Col,
  Row,
  Text,
  Header,
  Title,
  Body,
  Left,
  Right,
  Badge,
} from 'native-base';
import SplashScreen from 'react-native-splash-screen';


// import Shuttle from "../shuttle/";
// import Videos from "../videos/";
// import Events from "../eventManager/";
// import Weather from "../weather/";
// import Photos from "../photos/";
// import Athletics from "../athletics/";
// import Alumni from "../alumni/";
// import Learn from "../learn/";
// import Give from "../give/";
// import Find from "../find/";
// import Nearme from "../nearme/";
// import MyMSU from "../mymsu/";
// import Radio from "../radio/";
// import News from '../news';
import styles from './styles';

// const launchscreenBanner = require('../../img/bg3.png');
const launchscreenBg = require('../../img/morganBg.png');

const randomImages = [
  require('../../img/bg0.png'),
  require('../../img/bg1.png'),
  require('../../img/bg2.png'),
  require('../../img/bg3.png'),
  require('../../img/bg4.png'),
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() {
  //   SplashScreen.hide();
  // }

  // getRandomInt = max => {
  //   return Math.floor(Math.random() * Math.floor(max));
  // };

  // componentDidMount() {
  //   if (Platform.OS === "android") {
  //     Linking.getInitialURL().then(url => {
  //       this.navigate(url);
  //     });
  //   } else {
  //     Linking.addEventListener("url", this.handleOpenURL);
  //   }
  // }

  // componentWillUnmount() {
  //   Linking.removeEventListener("url", this.handleOpenURL);
  // }

  // // handleModalClose = () => {
  // //   this.setState({
  // //     modalVisible: false
  // //   });
  // // };
  // handleOpenURL = (event) => {
  //   this.navigate(event.url);
  // }
  // navigate = url => {
  //   const { navigate } = this.props.navigation;
  //   const route = url.replace(/.*?:\/\//g, "");
  //   // const id = route.match(/\/([^\/]+)\/?$/)[1];
  //   const routeName = route.split("/")[0];

  //   if (routeName === "facebook") {
  //     navigate("Facebook");
  //   }
  // };
  // handleOpenURL(url) {
  //   Linking.canOpenURL(url)
  //     .then(supported => {
  //       if (!supported) {
  //         console.log(`Can't handle url: ${url}`);
  //       } else {
  //         return Linking.openURL(url);
  //       }
  //     })
  //     .catch(err => console.error("An error occurred", err));
  // }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <ImageBackground
          source={launchscreenBg}
          style={styles.imageContainer}
          blurRadius={2}
        >
          <Content>
            <Header style={styles.headerStyle} iosBarStyle="light-content">
              <Left>
                <Button
                  transparent
                  onPress={
                    () => Linking.openURL('https://m.facebook.com/morganstateu')
                    // navigate("Facebook")
                  }
                >
                  <Icon name="facebook" style={styles.headerIconSocial} />
                </Button>
              </Left>
              <Left>
                <Button
                  transparent
                  onPress={() =>
                    Linking.openURL('https://www.twitter.com/morganstateu')
                  }
                >
                  <Icon name="twitter-circle" style={styles.headerIconSocial} />
                </Button>
              </Left>
              <Left>
                <Button
                  transparent
                  onPress={() =>
                    Linking.openURL('https://www.instagram.com/_u/morganstateu')
                  }
                >
                  <Icon name="instagram" style={styles.headerIconSocial} />
                </Button>
              </Left>
              <Left>
                <Button
                  badge
                  vertical
                  transparent
                  // onPress={() =>
                  //   Linking.openURL("https://www.instagram.com/_u/morganstateu")
                  // }
                >
                  <Badge style={{ width: 20, height: 20 }}>
                    <Text style={{ fontSize: 10 }}>2</Text>
                  </Badge>
                  <Icon name="email-alert" style={styles.headerIconSocial} />
                </Button>
              </Left>

              <Body style={styles.headerTitleStyle}>
                <Title style={{ color: '#fff' }}> My Morgan State </Title>
              </Body>
              <Right>
                <Button transparent onPress={() => navigate('DrawerOpen')}>
                  <Icon name="menu" style={styles.headerIconStyle} />
                </Button>
              </Right>
            </Header>

            <View style={styles.horizontalLine} />
            <View>
              <Image
                source={
                  randomImages[Math.floor(Math.random() * randomImages.length)]
                }
                style={styles.contentImageStyle}
              />
              {/* <Image
                source={homeScreenBanner}
                style={styles.contentImageStyle}
              /> */}
            </View>

            <Grid>
              <Row style={styles.row}>
                <Col style={styles.col}>
                  <TouchableOpacity>
                    <Icon
                      name="calendar-clock"
                      style={styles.icon}
                      // style={{
                      //   width: 40,
                      //   height: 40,
                      //   justifyContent: "center",
                      //   color: "#00ffff",
                      //   fontSize: 30
                      // }}
                      onPress={() => navigate('Events')}
                    />
                  </TouchableOpacity>
                  <Text numberOfLines={1} style={styles.iconText}>
                    Events
                  </Text>
                </Col>

                <Col style={styles.col}>
                  <TouchableOpacity>
                    <Icon
                      name="rss"
                      style={styles.icon}
                      // style={{
                      //   width: 40,
                      //   height: 40,
                      //   justifyContent: "center",
                      //   color: "#00ff00",
                      //   fontSize: 30
                      // }}
                      onPress={() => navigate('News')}
                    />
                    <Text numberOfLines={1} style={styles.iconText}>
                      News
                    </Text>
                  </TouchableOpacity>
                </Col>
                <Col style={styles.col}>
                  <Icon
                    name="image-multiple"
                    style={styles.icon}
                    onPress={() => navigate('Photos')}
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Photos
                  </Text>
                </Col>
                <Col style={styles.col}>
                  <TouchableOpacity>
                    <Icon
                      name="video"
                      style={styles.icon}
                      // style={{
                      //   width: 40,
                      //   height: 40,
                      //   justifyContent: "center",
                      //   color: "#ffff00",
                      //   fontSize: 30
                      // }}
                      onPress={() => navigate('Videos')}
                    />
                    <Text numberOfLines={1} style={styles.iconText}>
                      Videos
                    </Text>
                  </TouchableOpacity>
                </Col>
              </Row>

              <Row style={styles.row}>
                <Col style={styles.col}>
                  <TouchableOpacity>
                    <Icon
                      name="office"
                      style={styles.icon}
                      // style={{
                      //   width: 40,
                      //   height: 40,
                      //   justifyContent: "center",
                      //   color: "#00ff00",
                      //   fontSize: 30
                      // }}
                      // onPress={() => navigate('MyMSU')}
                      onPress={() => Linking.openURL('http://my.morgan.edu')}
                    />
                  </TouchableOpacity>
                  <Text numberOfLines={1} style={styles.iconText}>
                    myMSU
                  </Text>
                </Col>
                <Col style={styles.col}>
                  <TouchableOpacity>
                    <Icon
                      name="weather-rainy"
                      style={styles.icon}
                      // style={{
                      //   width: 40,
                      //   height: 40,
                      //   justifyContent: "center",
                      //   color: "#00ffff",
                      //   fontSize: 30
                      // }}
                      onPress={() => navigate('Weather')}
                    />
                    <Text numberOfLines={1} style={styles.iconText}>
                      Weather
                    </Text>
                  </TouchableOpacity>
                </Col>
                <Col style={styles.col}>
                  <TouchableOpacity>
                    <Icon
                      name="radio"
                      style={styles.icon}
                      // style={{
                      //   width: 40,
                      //   height: 40,
                      //   justifyContent: "center",
                      //   color: "#ffff00",
                      //   fontSize: 30
                      // }}
                      onPress={() =>
                        Linking.openURL('http://amber.streamguys.com:4020/live')
                      }
                    />
                    <Text numberOfLines={1} style={styles.iconText}>
                      WEAA
                    </Text>
                  </TouchableOpacity>
                </Col>

                <Col style={styles.col}>
                  <Icon
                    active
                    name="bus-school"
                    style={styles.icon}
                    onPress={() =>
                      // this.handleOpenURL("transloc://")
                      Linking.openURL('http://morgan.transloc.com')
                    }
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    {' '}
                    Shuttle{' '}
                  </Text>
                </Col>
              </Row>

              <Row style={styles.row}>
                <Col style={styles.col}>
                  <Icon
                    active
                    name="football"
                    style={styles.icon}
                    // style={{
                    //   width: 40,
                    //   height: 40,
                    //   justifyContent: "center",
                    //   color: "#ffff00",
                    //   fontSize: 30
                    // }}
                    onPress={() => navigate('Athletics')}
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Athletics
                  </Text>
                </Col>

                <Col style={styles.col}>
                  <Icon
                    name="school"
                    style={styles.icon}
                    onPress={() =>
                      Linking.openURL('http://www.morgan.edu/alumni_and_friends.html')
                    }
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Alumni
                  </Text>
                </Col>
                <Col style={styles.col}>
                  <Icon
                    name="credit-card-multiple"
                    style={styles.icon}
                    // style={{
                    //   width: 40,
                    //   height: 40,
                    //   justifyContent: "center",
                    //   color: "#00ff00",
                    //   fontSize: 30
                    // }}
                    onPress={() => Linking.openURL('http://givetomorgan.org')}
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Give
                  </Text>
                </Col>
                <Col style={styles.col}>
                  <Icon
                    active
                    name="map-marker"
                    style={styles.icon}
                    // style={{
                    //   width: 40,
                    //   height: 40,
                    //   justifyContent: "center",
                    //   color: "#00ffff",
                    //   fontSize: 30
                    // }}
                    onPress={() => Linking.openURL('http://map.morgan.edu')}
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Map
                  </Text>
                </Col>
              </Row>

              <Row style={styles.row}>
                <Col style={styles.col}>
                  <Icon
                    name="cart"
                    style={styles.icon}
                    onPress={() =>
                      Linking.openURL('http://morgan.bncollege.com/webapp/wcs/stores/servlet/BNCBHomePage?storeId=88866&catalogId=10001&langId=-1')
                    }
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Bookstore
                  </Text>
                </Col>
                <Col style={styles.col}>
                  <Icon
                    active
                    name="food"
                    style={styles.icon}
                    // style={{
                    //   width: 40,
                    //   height: 40,
                    //   justifyContent: "center",
                    //   color: "#ffff00",
                    //   fontSize: 30
                    // }}

                    onPress={() =>
                      Linking.openURL('https://www.dineoncampus.com/morgan/')
                    }
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Dining
                  </Text>
                </Col>
                <Col style={styles.col}>
                  <Icon
                    name="human-male-female"
                    style={styles.icon}
                    // style={{
                    //   width: 40,
                    //   height: 40,
                    //   justifyContent: "center",
                    //   color: "#00ffff",
                    //   fontSize: 30
                    // }}
                    onPress={() =>
                      Linking.openURL('https://whse2.morgan.edu/apex/f?p=372:1')
                    }
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Find
                  </Text>
                </Col>
                <Col style={styles.col}>
                  <Icon
                    active
                    name="near-me"
                    style={styles.icon}
                    // style={{
                    //   width: 40,
                    //   height: 40,
                    //   justifyContent: "center",
                    //   color: "#00ff00",
                    //   fontSize: 30
                    // }}
                    onPress={() => navigate('NewsDetail')}
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Near Me
                  </Text>
                </Col>
              </Row>
              <Row style={styles.row}>
                <Col style={styles.col}>
                  <Icon
                    name="alert"
                    style={styles.icon}
                    onPress={() =>
                      Linking.openURL('http://www.morgan.edu/student_affairs/police_and_public_safety/mobile_alert_system/account_login.html')
                    }
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Alerts
                  </Text>
                </Col>
                <Col style={styles.col}>
                  <Icon
                    active
                    name="phone-outgoing"
                    style={styles.icon}
                    // style={{
                    //   width: 40,
                    //   height: 40,
                    //   justifyContent: "center",
                    //   color: "#ffff00",
                    //   fontSize: 30
                    // }}

                    onPress={() =>
                      Linking.openURL('http://www.morgan.edu/contactus/')
                    }
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Contacts
                  </Text>
                </Col>
                <Col style={styles.col}>
                  <Icon
                    name="library-books"
                    style={styles.icon}
                    // style={{
                    //   width: 40,
                    //   height: 40,
                    //   justifyContent: "center",
                    //   color: "#00ffff",
                    //   fontSize: 30
                    // }}
                    onPress={() =>
                      Linking.openURL('http://www.morgan.edu/library')
                    }
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Library
                  </Text>
                </Col>
                <Col style={styles.col}>
                  <Icon
                    active
                    name="lead-pencil"
                    style={styles.icon}
                    // style={{
                    //   width: 40,
                    //   height: 40,
                    //   justifyContent: "center",
                    //   color: "#00ff00",
                    //   fontSize: 30
                    // }}

                    onPress={() =>
                      Linking.openURL('http://www.morgan.edu/apply_now.html')
                    }
                  />
                  <Text numberOfLines={1} style={styles.iconText}>
                    Apply
                  </Text>
                </Col>
              </Row>
            </Grid>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
