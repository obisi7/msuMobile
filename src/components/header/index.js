import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Linking,} from 'react-native';

import {
    Header,
    Title,
    Button,
    Left,
    Right,
    Body
} from "native-base";

import styles from  './styles';

class AppHeader extends Component {

    render() {

        return (

            <Header style={styles.headerStyle} iosBarStyle='light-content'>

                <Left >
                    <Button
                        transparent
                        onPress={() => Linking.openURL('fb://facewebportal?href=https://www.facebook.com/morganstateu')}
                    >
                        <Icon name ='facebook'  style={styles.headerIconStyle} />
                    </Button>
                    <Button
                        transparent
                        onPress={() => Linking.openURL('https://www.twitter.com/morganstateu')}
                    >
                        <Icon name ='twitter-circle'  style={styles.headerIconStyle} />
                    </Button>
                    <Button
                        transparent
                        onPress={() => Linking.openURL('https://www.instagram.com/_u/morganstateu')}
                    >
                        <Icon name ='instagram'  style={styles.headerIconStyle} />
                    </Button>

                </Left>

                <Body>
                <Title style={{color: '#fff' }} >My Morgan</Title>
                </Body>
                <Right>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}
                    >
                        <Icon name ='menu'  style={styles.headerIconStyle} />
                    </Button>
                </Right>

            </Header>
        );
    }
}

export default AppHeader;