"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var Themed_1 = require("../components/Themed");
function TabOneScreen() {
    var _this = this;
    return (React.createElement(Themed_1.View, { style: styles.container },
        React.createElement(react_native_1.Image, { source: require("../assets/images/happyone.png"), style: { width: 400, height: 300, alignSelf: "center" } }),
        React.createElement(Themed_1.Text, { style: styles.title }, "Digital ticket"),
        React.createElement(Themed_1.View, { style: styles.separator, lightColor: "#eee", darkColor: "rgba(255,255,255,0.1)" }),
        React.createElement(Themed_1.Text, { style: styles.about }, "Easy solution to buy tickets for your travel, business trips, transportation, lodging and culnary."),
        React.createElement(react_native_1.TouchableOpacity, { style: styles["continue"], onPress: function () {
                Actions.chat({ name: _this.state.name });
            } },
            React.createElement(vector_icons_1.Ionicons, { name: "md-arrow-round-forward", size: 37, color: "#fff" }))));
}
exports["default"] = TabOneScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%'
    },
    about: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    "continue": {
        backgroundColor: '#1e88e5',
        height: 40,
        marginTop: 20,
        width: '70%',
        alignItems: 'center',
        borderRadius: 20
    }
});
