import React, { Component } from 'react';
import { View } from 'react-native';

class DegreeComponent extends Component {
  render() {
    return (
      <View style={[styles.degree, this.props.style]} />
    );
  }
}

export default DegreeComponent;
