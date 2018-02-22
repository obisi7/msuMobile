import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  AppRegistry
} from "react-native";

import {
  List,
  ListItem,
  Container,
  Content,
  Body,
  Left,
  Right,
  Title,
  Header,
  Button
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import NearmeList from "./nearmeList";
import PlaceViewer from "./placeViewer";
import  AppFooter from "../footer/";

const _ = require("lodash");
const placesAPIKey = "AIzaSyBmDp2f1uYPwURE7PFgWqYSfOdeCmoCoXQ";

class NearMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      pageToken: "",
      setModalVisible: false,
      modalArticleData: {},
      refreshing: false,
      siteTitle: ""
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

  handleRefresh = () => {
    this.setState(
      {
        pageToken: "",
        refreshing: true
      },
      () => {
        this.fetchData();
      }
    );
  };

  handleLoadMore = () => {
    this.fetchData();
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };
  renderFooter = () => {
    if (this.state.pageToken === undefined) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    navigator.geolocation.getCurrentPosition(position => {
      //  latitude = Number(position.coords.latitude.toFixed(6));
      //  longitude = Number(position.coords.longitude.toFixed(6));
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      const { pageToken } = this.state;
      const urlFirst = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=200&type=restaurant&key=AIzaSyBmDp2f1uYPwURE7PFgWqYSfOdeCmoCoXQ`;
      const urlNext = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=200&type=restaurant&key=AIzaSyBmDp2f1uYPwURE7PFgWqYSfOdeCmoCoXQ&pagetoken=${pageToken}`;

      let url = pageToken === "" ? urlFirst : urlNext;
      //   console.log(url);

      this.setState({ loading: true });
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(res => {
          const arrayData = _.uniqBy(
            [...this.state.data, ...res.results],
            "id"
          );

          this.setState({
            siteTitle: "Resturants Near By",
            data: pageToken === "" ? res.results : arrayData,
            loading: false,
            refreshing: false,
            pageToken: res.next_page_token
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({ loading: false });
          
        });
  },(error) => {
      alert(error)
    }, {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
  };

  render() {
    console.log(this.state);

    return (
      <Container style={styles.container}>
        <Content>
          <Header style={styles.headerTitleStyle} iosBarStyle="light-content">
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="angle-left" style={styles.headerIconStyle} />
              </Button>
            </Left>
            <Body style={{ flex: 4 }}>
              <Text style={{ color: "#fff", fontSize: 20 }}>
                {this.state.siteTitle}
              </Text>
            </Body>
            <Right />
          </Header>
          <View style={styles.horizontalLine} />
          <FlatList
            data={this.state.data}
            extraData={this.state}
            renderItem={({ item }) => {
              const rating = item.rating ? item.rating : "na";

              return (
                <View>
                  <ListItem
                    containerStyle={{
                      borderBottomWidth: 0
                    }}
                    style={{
                      backgroundColor: "transparent",
                      marginLeft: 2,
                      marginRight: 2
                    }}
                  >
                    <NearmeList
                      onPress={this._handleItemDataOnPress}
                      data={item}
                    />
                  </ListItem>
                </View>
              );
            }}
            keyExtractor={item => item.id}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
          />
          
          <PlaceViewer
            showModal={this.state.setModalVisible}
            articleData={this.state.modalArticleData}
            onClose={this._handleModalClose}
          />
        </Content>
        <View style={styles.footerView}>
          {/* <Text style={{ color: '#ffff', fontSize: 15}}>© Copyright Bisi Oladipupo 2018</Text> */}
        </View>
        {/* <AppFooter /> */}
      </Container>
      
    );
  }
}
const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    marginTop: 0,
    marginLeft: 0
  },
  horizontalLine: {
    borderBottomColor: "#1b4383",
    borderBottomWidth: 1
  },
  headerTitleStyle: {
    flex: 4,
    flexDirection: "row",
    alignSelf: "center",
    // alignItems: 'flex-start',
    justifyContent: "center",
    backgroundColor: "#f47937"
  },
  footerView:{
    backgroundColor: "#1b4383",
    // borderBottomWidth: 5,
    height: 40,
    alignItems: 'center',
   },

  headerIconStyle: {
    flex: 1,
    flexDirection: "row",
    color: "#fff",
    fontSize: 30
  }
};
export default NearMe;
