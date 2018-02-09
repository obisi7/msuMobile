// const React = require('react-native');

// const { StyleSheet } = React;

export default {

  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#cde1f9',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  // container: {
  //   flex: 1,
  //   paddingLeft: 20,
  //   paddingRight: 20,
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center', // flex-start, flex-end, center, stretch
  // },
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
  text: {
    alignSelf: 'center',
    marginBottom: 7,
    fontSize: 20,
    color: '#1b4383',
  },
  dateContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  headerIconStyle: {
    color: '#fff',
    fontSize: 30,
  },
  degree: {
    borderColor: 'black',
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  icon: {
    width: 75,
    height: 75,
    marginRight: 20,
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  darkText: {
    fontSize: 18,
  },
  lightText: {
    flex: 1,
    flexWrap: 'wrap',
    color: '#9a9a9a',
  },
  slightMargin: {
    marginRight: 1,
  },
};
