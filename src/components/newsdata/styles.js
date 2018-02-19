const React = require('react-native');

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text: {
    alignSelf: 'center',
    marginBottom: 7,
    fontSize: 10,
  },
  headerTitleStyle: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f47937',
  },
  headerStyle: {
    flex: 1,
    backgroundColor: '#f47937',

  },
  horizontalLine: {
    borderBottomColor: '#1b4383',
    borderBottomWidth: 1,
  },

  myListStyle: {
    flex: 6,
    // flexDirection: 'row',
    // alignSelf: "center",
    // alignItems: 'center',
    // justifyContent: 'flex-start',

  },
  headerIconStyle: {
    color: '#fff',
    fontSize: 30,
  },
  mb: {
    marginBottom: 15,
  },
};
