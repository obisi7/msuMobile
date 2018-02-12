import React, { Component } from "react";
import { Linking } from "react-native";

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openURL = url => {
    this.Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log(`Can't handle url: ${url}`);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error("An error occurred", err));
  };

  render() {
    return this.openURL(
      "fb://facewebportal?href=https://www.facebook.com/morganstateu/"
    );
  }
}

export default Facebook;
