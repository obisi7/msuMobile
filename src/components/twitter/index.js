import React, { Component } from 'react';
import {
  Linking,
} from 'react-native';

const Twitter = () => {
  const url = 'https://www.twitter.com/morganstateu';

  return (
    Linking.canOpenURL(url).then((supported) => {
      if (!supported) {
        console.log(`Can't handle url: ${url}`);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err))

  );
};

export default Twitter;
