import React, { Component } from "react";
import {
  Dimensions,
  Modal,
  Share,
  TouchableOpacity,
  PixelRatio,
  Platform,
  requireNativeComponent,
  PropTypes
} from "react-native";
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
import YouTube from "react-native-youtube";

const webViewHeight = Dimensions.get("window").height - 56;

export default class YoutubeViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true,
      isLooping: true,
      duration: 0,
      currentTime: 0,
      fullscreen: false,
      containerMounted: false,
      containerWidth: null
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
    const YOUTUBE_API = "AIzaSyCq3IysjyfDAU_QYursgiYjnxwKp0wPy14";
    const { showModal, articleData } = this.props;
    // console.log(articleData.youtubeId);
    const { youtubeId, videoTitle } = articleData;

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
                  children={youtubeId}
                  style={{ color: "#ffffff" }}
                />
              </Body>
              <Right>
                <TouchableOpacity
                  onPress={() =>
                    this._handleShare(
                      youtubeId,
                      videoTitle
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
              
                <YouTube
                  ref={(component) => { this._youTubeRef = component }}
                  // ref={(component) => {
                  //   this._youTubePlayer = component;
                  // }}
                  videoId={youtubeId}
                  // videoId='ncw4ISEU5ik'
                  play={true}
                  loop={false}z
                  fullscreen={true}
                  controls={1}
                  // style={styles.player}
                  apiKey="AIzaSyCq3IysjyfDAU_QYursgiYjnxwKp0wPy14"
                  onReady={e => this.setState({ isReady: true })}
                  onChangeState={e => this.setState({ status: e.state })}
                  onChangeQuality={e => this.setState({ quality: e.quality })}
                  onError={e => this.setState({ error: e.error })}
                  onProgress={e =>
                    this.setState({
                      currentTime: e.currentTime,
                      duration: e.duration
                    })
                  }
                  style={{
                    alignSelf: "stretch",
                    height: 300,
                    backgroundColor: "black",
                    marginVertical: 10
                  }}
                />
              {/* Playing / Looping */}
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this.setState(s => ({ isPlaying: !s.isPlaying }))
                  }
                >
                  <Text style={styles.buttonText}>
                    {this.state.status == "playing" ? "Pause" : "Play"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this.setState(s => ({ isLooping: !s.isLooping }))
                  }
                >
                  <Text style={styles.buttonText}>
                    {this.state.isLooping ? "Looping" : "Not Looping"}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Previous / Next video */}
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this._youTubePlayer && this._youTubePlayer.previousVideo()
                  }
                >
                  <Text style={styles.buttonText}>Previous Video</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this._youTubePlayer && this._youTubePlayer.nextVideo()
                  }
                >
                  <Text style={styles.buttonText}>Next Video</Text>
                </TouchableOpacity>
              </View>
              {/* Go To Specific time in played video with seekTo() */}
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this._youTubePlayer && this._youTubePlayer.seekTo(15)
                  }
                >
                  <Text style={styles.buttonText}>15 Seconds</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this._youTubePlayer && this._youTubePlayer.seekTo(2 * 60)
                  }
                >
                  <Text style={styles.buttonText}>2 Minutes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this._youTubePlayer && this._youTubePlayer.seekTo(15 * 60)
                  }
                >
                  <Text style={styles.buttonText}>15 Minutes</Text>
                </TouchableOpacity>
              </View>
              {/* Play specific video in a videoIds array by index */}
              {this._youTubePlayer &&
                this._youTubePlayer.props.videoIds &&
                Array.isArray(this._youTubePlayer.props.videoIds) && (
                  <View style={styles.buttonGroup}>
                    {this._youTubePlayer.props.videoIds.map((videoId, i) => (
                      <TouchableOpacity
                        key={i}
                        style={styles.button}
                        onPress={() =>
                          this._youTubePlayer && this._youTubePlayer.playVideoAt(i)
                        }
                      >
                        <Text
                          style={[styles.buttonText, styles.buttonTextSmall]}
                        >{`Video ${i}`}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              {/* Get current played video's position index when playing videoIds (and playlist in iOS) */}
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this._youTubePlayer &&
                    this._youTubePlayer
                      .videosIndex()
                      .then(index => this.setState({ videosIndex: index }))
                      .catch(errorMessage =>
                        this.setState({ error: errorMessage })
                      )
                  }
                >
                  <Text style={styles.buttonText}>
                    Get Videos Index: {this.state.videosIndex}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Fullscreen */}
              {!this.state.fullscreen && (
                <View style={styles.buttonGroup}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setState({ fullscreen: true })}
                  >
                    <Text style={styles.buttonText}>Set Fullscreen</Text>
                  </TouchableOpacity>
                </View>
              )}
              {/* Update Progress & Duration (Android) */}
              {Platform.OS === "android" && (
                <View style={styles.buttonGroup}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                      this._youTubePlayer
                        ? this._youTubePlayer
                            .currentTime()
                            .then(currentTime => this.setState({ currentTime }))
                            .catch(errorMessage =>
                              this.setState({ error: errorMessage })
                            )
                        : this._youTubePlayer
                            .duration()
                            .then(duration => this.setState({ duration }))
                            .catch(errorMessage =>
                              this.setState({ error: errorMessage })
                            )
                    }
                  >
                    <Text style={styles.buttonText}>
                      {/* Update Progress & Duration (Android) */}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
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
