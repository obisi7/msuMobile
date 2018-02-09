import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback, Animated } from 'react-native';
import { Card } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import styles from "./styles";

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    image = props.imageLink;
    // this.state = {
    //   animatePress: new Animated.View(1),
    //   animateItem: new Animated.Value(0),
    // };
  }
  _handlePress = () => {
    // const { imageLink } = this.props;   
    this.props.onPress({ image });
  };

  // componentWillMount() {
  //   const { index } = this.props;
  //   const delay = (index + 1) * 500;
  //   // Animated.sequence([
  //   //     Animated.delay(delay),
  //   //     Animated.spring( this.state.animateItem, {
  //   //     toValue: 1,
  //   //     velocity: 1
  //   //     })
  //   // ]).start()
  //   Animated.spring(this.state.animateItem, {
  //     toValue: 1,
  //     duration: 1000,
  //     delay,
  //   }).start();
  // }
  // AnimateIn() {
  //   Animated.timing(this.state.animatePress, {
  //     toValue: 0.8,
  //     duration: 200,
  //   }).start();
  // }
  // AnimateOut() {
  //   Animated.timing(this.state.animatePress, {
  //     toValue: 1,
  //     duration: 200,
  //   }).start();
  // }

  render() {
    const { itemWidth, imageLink, _handleItemPress } = this.props;
    // console.log(image);

    return (
      <Card>
        <TouchableWithoutFeedback
          onPress={() => {this._handlePress}}
          // onPressIn={() => this.animateIn()}
          // onPressOut={() => this.animateOut()}
        >
          {/* <Animated.View
            style={{
              margin: 5,
              // backfaceVisibility: 'hidden',
              transform: [
                {
                  scale: 1,
                },
                {
                  rotateY: this.state.animateItem.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['180deg', '0deg'],
                  }),
                },
              ],
            }}
          > */}
          <Image
            style={{ width: itemWidth, height: 100 }}
            source={{ uri: imageLink }}
          />
          {/* </Animated.View> */}
        </TouchableWithoutFeedback>
      </Card>
    );
  }
}

export default ImageList;
