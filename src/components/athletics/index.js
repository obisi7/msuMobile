import React, { Component } from "react";
import { View, FlatList, ActivityIndicator, Alert } from "react-native";
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
import Modal from "../modal";
import AthleticsData from "./athleticsdata";

class Athletics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      refreshing: false,
      text: "",
      modalVisible: false,
      modalArticleData: {},
      error: null
    };
  }

  _handleItemDataOnPress = articleData => {
    this.setState({
      modalVisible: true,
      modalArticleData: articleData
    });
  };

  _handleModalClose = () => {
    this.setState({
      modalVisible: false,
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

  getSportsNews() {
    const link = "http://www.morganstatebears.com/rss.aspx?path=foot";
    const parseString = require("react-native-xml2js").parseString; // convert fetched xml data into a json object
    let resJson = [];

    return fetch(link)
      .then(response => response.text())
      .then(response => {
        parseString(response, function(err, result) {
          resJson = result; // local var result saved to a global var resJson for later use
        });

        this.setState({
          data: resJson.rss.channel[0].item,
          isLoading: false,
          refreshing: false,
          error: response.error || null
        });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
        Alert.alert("Error", "Sorry, something went wrong. Please try again");
        // console.log('fetch', error)
      });
  }

  componentDidMount() {
    this.getSportsNews();
  }

  render() {
    // console.log(this.state);
    // const  { navigate } = this.props.navigation;
    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{ marginTop: 10 }}
          children="Please wait... Loading football news"
        />
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#f47937"
          fontSize="30"
        />
      </View>
    ) : (
      <FlatList
        data={this.state.data}
        extraData={this.state}
        renderItem={({ item }) => (
          <ListItem>
            <AthleticsData onPress={this._handleItemDataOnPress} data={item} />
          </ListItem>
        )}
        keyExtractor={item => item.title}
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
                <Text style={{ color: "#fff"}}>Search</Text>
              </Button>
            </Right>
          </Header>
          <View style={styles.horizontalLine} />

          {view}
          <Modal
            showModal={this.state.setModalVisible}
            articleData={this.state.modalArticleData}
            onClose={this._handleModalClose}
          />
        </Content>
      </Container>
    );
  }
}

export default Athletics;
