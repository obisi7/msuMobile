import React, { Component } from "react";

import {
    Container,
    Header,
    Title,
    Content,
    Card,
    CardItem,
    Button,
    Thumbnail,
    Icon,
    Text,
    Left,
    Body,
    Right,
    List,
    ListItem
} from "native-base";
// import TimeAgo from 'react-native-timeago';

import styles from "./styles";
import HTMLView from 'react-native-htmlview';

class Newsdata extends Component {


    render() {

        let articles = this.props.data.map(function (articleData, index) {
            return(
                <Card>

                    <CardItem>
                        <Left>
                            <Thumbnail source = '' />
                        </Left>
                        <Body>
                            <Text> {articleData.title.$t} </Text>
                        </Body>
                    </CardItem>
                    <CardItem content>
                       <HTMLView value= {articleData.content.$t} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="time" />
                                {/*<Text> <TimeAgo time={articleData.published.$t} /> </Text>*/}
                                <Text> 1 hr ago</Text>
                            </Button>
                        </Left>
                        <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text> {articleData.thr$total.$t} Comments </Text>
                        </Button>
                        </Body>
                    </CardItem>
                </Card>
            );
        });


        return (

            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title> Morgan State </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

                    {articles}

                </Content>
            </Container>
        );
    }
}

export default Newsdata;
