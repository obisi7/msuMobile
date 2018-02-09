import React, { Component } from 'react';
import {
  Container,
  Header,
  Text,
  View,
  Content,
  Icon,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
import { CalendarList } from 'react-native-calendars';

export default class CalendarListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Header style={styles.headerTitleStyle} iosBarStyle="light-content">
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="ios-arrow-back" style={styles.headerIconStyle} />
              </Button>
            </Left>
            <Body>
              <Text style={{ color: '#fff', fontSize: 15 }}> Athletics</Text>
            </Body>

            <Right>
              <Icon
                name="md-calendar"
                style={{ color: '#fff', fontSize: 30 }}
              />
            </Right>
          </Header>
          <View style={styles.horizontalLine} />
          <CalendarList
            current="2018-01-16"
            pastScrollRange={24}
            futureScrollRange={24}
          />
        </Content>
      </Container>
    );
  }
}
const styles = {
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350,
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee',
  },
  headerTitleStyle: {
    flex: 4,
    flexDirection: 'row',
    alignSelf: 'center',
    // alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#f47937',
  },
  horizontalLine: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  dateContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  headerIconStyle: {
    color: '#fff',
    fontSize: 30,
  },
};
