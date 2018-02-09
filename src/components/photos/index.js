import React, { Component } from "react";
import { View, FlatList, Dimensions, ActivityIndicator } from "react-native";
import {
  Container,
  Header,Title,Left,Body,Right,
  Content,Card,CardItem,Button,Thumbnail,Item,Input,Text,List,ListItem
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import ImageList from "../imageList/";
import PhotoViewer from "../photos/photoViewer";

const ITEM_WIDTH = Dimensions.get("window").width;
const FLICKR_API = "c63979f705d43372fefbfacc6f011bac";
const FLICKR_SECRET = "5ec96c4a4e5a5123";

// Morgan State Flickr user_id is: 46262470@N03 obtained via website https://www.webpagefx.com/tools/idgettr/
// using the flickr username morganstateu. user_id is and not username is needed in making flickr api call

// const url = 'https://randomuser.me/api?page=1&results=10'; // for prototyping app
// const url = "https://www.flickr.com/photos/morganstateu/albums"; // desired url for app
const url =
  "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=c63979f705d43372fefbfacc6f011bac&user_id=46262470@N03&format=json&&per_page=32&nojsoncallback=1"; // MSU flickr
// const url = "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=c63979f705d43372fefbfacc6f011bac&user_id=87111832@N03&format=json&&per_page=20"; // bisi's flickr

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: [],
      modalVisible: false,
      modalPhotoData: {},
      isLoading: true,
      isError: false,
      text: "",
      columns: 4,
      key: 1
    };
  }
  _handleItemPress = photoData => {
    this.setState({
      modalVisible: true,
      modalPhotoData: photoData
    });
  };

  _handleModalClose = () => {
    this.setState({
      modalVisible: false,
      modalPhotoData: {}
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

  getImageData = () => {
    return (
      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            isLoading: false,
            imageData: responseJson.photos.photo
          });
        })
        .catch(error => {
          console.error(error);
        })
    );
  };

  componentDidMount() {
    this.getImageData();
  }

  render() {
    const { columns, imageData } = this.state;
    // const photo = "https://www.flickr.com/photos/46262470@N03/";

    // console.log(this.state);

    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{ marginTop: 10 }}
          children="Please wait... Loading photos"
        />
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#f47937"
          fontSize="30"
        />
      </View>
    ) : (
      <FlatList
        numColumns={columns}
        data={this.state.imageData}
        //     [
        //     require("../../img/bg1.png"),
        //     require("../../img/bg2.png"),
        //     require("../../img/bg3.png"),
        //     require("../../img/bg4.png"),
        // ] }
        extraData={this.state}
        renderItem={({ item, index }) => {
          const photoURL =
            "https://farm" +
            item.farm +
            ".static.flickr.com/" +
            item.server +
            "/" +
            item.id +
            "_" +
            item.secret +
            "_c.jpg";

          return (
            <ImageList
              itemWidth={(ITEM_WIDTH - 10 * columns) / columns}
              onPress={this._handleItemPress}
              data={item}
              imageLink={photoURL}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return `${item.id + index}`;
          // return { index }
        }}
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
          <PhotoViewer
            showModal={this.state.modalVisible}
            photoData={this.state.modalPhotoData}
            onClose={this._handleModalClose}
          />
        </Content>
      </Container>
    );
  }
}

export default Photos;
