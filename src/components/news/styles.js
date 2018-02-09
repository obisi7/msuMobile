const React = require('react-native');

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: flex-start,
  },
  headerTitleStyle: {
    flex: 4,
    flexDirection: 'row',
    alignSelf: 'center',
    // alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#f47937',
  },
  text: {
    alignSelf: 'center',
    marginBottom: 7,
  },
  // headerStyle: {
  //     // flex: 1,
  //     backgroundColor: '#f47937',
  //     // marginLeft: 0
  //
  // },
  headerIconStyle: {
    color: '#fff',
    fontSize: 30,
  },
  horizontalLine: {
    borderBottomColor: '#f47937',
    borderBottomWidth: 2,
  },
};
