const React = require('react-native');

const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  contentImageStyle: {
    flex: 1,
    width: null,
    height: 150,
    marginBottom: 40,
    // marginLeft: 0
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30,
  },
  logo: {
    position: 'absolute',
    left: Platform.OS === 'android' ? 40 : 50,
    top: Platform.OS === 'android' ? 35 : 60,
    width: 280,
    height: 100,
  },
  headerIconStyle: {
    color: '#fff',
    flexDirection: 'row',
    fontSize: 30,
  },
  footerView: {
    backgroundColor: '#f47937',
    // borderBottomWidth: 5,
    height: 40,
    alignItems: 'center',
  },
  headerIconSocial: {

    color: '#fff',
    flexDirection: 'row',
    flex: 1,
    fontSize: 20,

  },
  headerTitleStyle: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    borderBottomColor: '#f47937',
    borderBottomWidth: 1,
  },
  headerStyle: {
    flex: 1,
    backgroundColor: '#1b4383',
    // marginBottom: 5,

  },
  text: {
    color: '#D8D8D8',
    bottom: 6,
    marginTop: 5,
  },
  containerStyle: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'transparent',
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingLeft: 15,
  },
  iconText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 2,
  },
  icon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    color: '#fff',
    fontSize: 30,
  },
  col: {
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  row: {
    paddingBottom: 30,
  },
};
