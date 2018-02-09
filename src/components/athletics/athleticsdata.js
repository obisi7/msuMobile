import React, { Component } from 'react';
import { TouchableOpacity} from 'react-native';
import {
    Container, Header, Title, Content, Card, CardItem,
    Button, Thumbnail, Item, Input, Text,
    Left, Body, Right, List, ListItem
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

import TimeAgo from 'react-native-timeago';
import  { GetImage2 } from "../helper/";
import styles from "./styles";


class AthleticsData extends Component{

    constructor(props){
        super(props);
        this.data = props.data;
    }

    _handlePress=() =>{
        const {link, title} = this.data;
        this.props.onPress({link,title})
    };

    render(){

        return(
            <TouchableOpacity onPress={this._handlePress} style={{flexDirection:'row'}} activeOpacity={0.5}>
                <Thumbnail style={{ alignSelf: 'center' }} source={{ cache:'force-cache', uri: "http://image-api.suckup.de/image-api.php?file="+ GetImage2(this.data.description) +"&quality=25" }}/>
                <Body style={styles.myListStyle}>

                    <Text style={{fontSize: 15}}> {this.data.title} </Text>

                    <Text note>Posted: {<TimeAgo time={this.data.pubDate.toString()}/>} </Text>

                </Body>
                <Right>
                    <Button transparent>
                        <Icon  name='angle-right' style={{fontSize: 30}}/>

                    </Button>
                </Right>
            </TouchableOpacity>
        )
    }
}
export default AthleticsData;
