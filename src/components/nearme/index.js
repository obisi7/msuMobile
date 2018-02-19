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

const _ = require("lodash");
const placesAPIKey = "AIzaSyBmDp2f1uYPwURE7PFgWqYSfOdeCmoCoXQ";

export default class NearMe extends Component {
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

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = Number(position.coords.latitude.toFixed(6));
      const longitude = Number(position.coords.longitude.toFixed(6));
      const { pageToken } = this.state;
      const urlFirst = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=restaurant&key=AIzaSyBmDp2f1uYPwURE7PFgWqYSfOdeCmoCoXQ`;
      const urlNext = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=restaurant&key=AIzaSyBmDp2f1uYPwURE7PFgWqYSfOdeCmoCoXQ&pagetoken=${pageToken}`;

      let url = pageToken === "" ? urlFirst : urlNext;
    //   console.log(url);
      //   console.log("url");
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
            // data: res.results,
            loading: false,
            refreshing: false,
            pageToken: res.next_page_token
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({ loading: false });
        });
    });
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
//   renderHeader = () => {
//     return (
      
//             <Body>
//               <Title> {this.state.siteTitle} </Title>
//             </Body>

//             <Right />
          
//     );
//   };
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

  _handleItemDataOnPress = articleData => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
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
  render() {
    // console.log(this.state);

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
            <Body>
              <Title> {this.state.siteTitle} </Title>
            </Body>

            <Right />
          </Header>
          <View style={styles.horizontalLine} />
          
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            // ListHeaderComponent={this.renderHeader}
            // ListFooterComponent={this.renderFooter}
            renderItem={({ item }) => {
              const rating = item.rating ? item.rating : "na";               
                <ListItem>
                  <NearmeList
                    onPress={this._handleItemDataOnPress}
                    data={item} rating={rating}
                  />
                </ListItem>
            }}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
          />
        </Content>
      </Container>
      //   <View>
      //     <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
      //       <FlatList
      //         data={this.state.data}
      //         keyExtractor={item => item.id}
      //         ListHeaderComponent={this.renderHeader}
      //         ListFooterComponent={this.renderFooter}
      //         renderItem={({ item }) => {
      //           const rating = item.rating ? item.rating : "na";

      //           return (
      //             <View
      //             // style={{
      //             //     height: 1,
      //             //     width: "86%",
      //             //     backgroundColor: "#CED0CE",
      //             //     marginLeft: "14%"
      //             //   }}

      //             >
      //               <ListItem
      //                 roundAvatar
      //                 title={`${item.name}` + " (" + `${rating}` + ")"}
      //                 subtitle={`${item.vicinity}`}
      //                 avatar={{ uri: item.icon }}
      //                 containerStyle={{ borderBottomWidth: 0 }}
      //               />
      //             </View>
      //           );
      //         }}
      //         onRefresh={this.handleRefresh}
      //         refreshing={this.state.refreshing}
      //         onEndReached={this.handleLoadMore}
      //         onEndReachedThreshold={50}
      //       />
      //     </List>
      //   </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    marginTop: 80,
    marginLeft: 20
  },

  headerTitleStyle: {
    flex: 4,
    flexDirection: "row",
    alignSelf: "center",
    // alignItems: 'flex-start',
    justifyContent: "center",
    backgroundColor: "#f47937"
  },
  text: {
    alignSelf: "flex-start",
    marginBottom: 7,
    fontSize: 20,
    color: "#ffffff"
    // marginTop: 5,
    // paddingVertical: 10,
  },
  headerIconStyle: {
    color: "#fff",
    fontSize: 30
  }
};
