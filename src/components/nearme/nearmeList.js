import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import {
    Container, Header, Title, Content, Card, CardItem,
    Button, Thumbnail, Text,
    Left, Body, Right, List, ListItem
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

// import TimeAgo from 'react-native-timeago';
// import  { GetImage } from "../helper/";
import { GetImage2 } from '../helper/';
import styles from "./styles";


class NearmeList extends Component{

    constructor(props){
        super(props);
        this.data = props.data;
    }

    _handlePress=() =>{
        const photoURL = this.data.photos.html_attributions;
        // const place = this.data.name;
        // const photoURL = GetImage2(placePhotosLink);
        this.props.onPress({photoURL})
    };

    render(){

        return(
            <TouchableOpacity onPress={this._handlePress} style={{flexDirection:'row'}} activeOpacity={0.5}>
                <Thumbnail style={{ alignSelf: 'center' }} source={{ cache:'force-cache', uri: this.data.icon }}/>
            
             {/* <Image
          source={{ uri: this.data.icon }}
          style={{ width: 60, height: 45 }}
        /> */}
                <Body style={styles.myListStyle}>

                    <Text style={{fontSize: 15, color: '#1b4383'}}> {`${this.data.name}` +
                    " (" +
                    `${this.data.rating}` +
                    ")"} </Text>

                    <Text note style={{color: '#ff0000'}}> {this.data.vicinity } </Text>

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
export default NearmeList;
