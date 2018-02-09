const React = require('react-native');

const { StyleSheet } = React;

export default {
    listContainer: {
        backgroundColor: "#f2f2f2"
    },
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center" //flex-start, flex-end, center, stretch
    },
  buttonText: {
    alignSelf: 'center',
    padding: 20,
    color: '#f47937',
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
    dateTime: {
        fontSize: 16,
        textAlign: "left",
        marginBottom: 20,
        color: "#9a9a9a"
    },
    dateContainer: {
        alignItems: "center",
        marginRight: 20
    },
    icon: {
        width: 75,
        height: 75,
        // color: '#0000ff',
        // fontSize: 40,
        // textAlign: 'center',
        marginRight: 20
    },
    iconContainer: {
        // flexDirection: "row",
        alignItems: "center",
        // justifyContent: "flex-end"
    },
    tempContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    darkText: {
        fontSize: 18
    },
    lightText: {
        color: "#9a9a9a"
    },
    slightMargin: {
        marginRight: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    }
};
