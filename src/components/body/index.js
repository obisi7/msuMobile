import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
    Footer,
    FooterTab,
    Button,
    Icon,
    Left,
    Right,
    Content
} from "native-base";
import style from  './styles';

class AppBody extends Component {

    render() {

        return (

            <Content>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text > Today's Weather here...</Text>
                </View>
            </Content>
        );
    }
}

export default AppBody;