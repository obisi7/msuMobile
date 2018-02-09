import React, { Component } from 'react';
import {
    Linking,
} from 'react-native';

const Instagram = () => {
    const url = 'https://www.instagram.com/_u/morganstateu/';

    return (
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err))

    );
};

export default Instagram;


