import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Share, ScrollView, View , TouchableOpacity} from 'react-native';


import {
    Container,
    Header,
    Title,
    Content,
    Card,
    CardItem,
    Button,
    Thumbnail,
    Text,
    Left,
    Body,
    Right,
    List,
    ListItem
} from "native-base";
import styles from "./styles";
import HTMLView from 'react-native-htmlview';
// import ShareWindow from "../share";
import  { ContentSnippet } from "../helper/";

class NewsDetail extends Component {


    onShare = (link) => {
        Share.share({
            // message: 'MSU: we\'re growing the future and leading the world:' + link,
            message: 'Morgan State in the news: 77' + link,
            url: 'http://www.morgan.edu',
            title: 'Wow, did you know this?'
        }, {
            // Android only:
            dialogTitle: 'Share MSU news',
            // iOS only:
            // excludedActivityTypes: [
            //     'com.apple.UIKit.activity.PostToTwitter'
            // ]
        })
    };



render() {

        let {params} = this.props.navigation.state;
        // const {goBack} = this.props.navigation;
        const  { navigate, goBack} = this.props.navigation;

        return (

            <Container style={styles.container}>

                <Content>
                    <Header style={styles.headerTitleStyle} iosBarStyle='light-content'>

                        <Left>
                            <Button transparent onPress={() => goBack()}>
                                <Icon name="angle-left" style={{fontSize: 30, color: '#1b4383'}} />
                            </Button>
                        </Left>
                        <Body style={{flex: 3}}>
                            <Title style={{color: '#fff' }}> {ContentSnippet(params.newsItem.title.toString())}</Title>
                            {/*<Title style={{color: '#fff' }}> Details of Item</Title>*/}
                        </Body>
                        <Right >
                            <TouchableOpacity onPress={() => this.onShare(params.newsItem.link) } >
                                {/*<Button transparent >*/}
                                    <Icon name="share"  style={{fontSize: 20, color: '#1b4383'}} />
                                {/*</Button>*/}
                            </TouchableOpacity>
                        </Right>

                    </Header>
                    <View style={styles.horizontalLine} />

                    <ScrollView pagingEnabled style={{marginLeft: 5, marginRight: 5, marginTop: 5}}>
                        {/*<CardItem>*/}

                            <HTMLView value= {params.newsItem.description.toString()} />

                        {/*</CardItem>*/}
                    </ScrollView>

                </Content>
            </Container>
        );
    }
}

export default NewsDetail;




