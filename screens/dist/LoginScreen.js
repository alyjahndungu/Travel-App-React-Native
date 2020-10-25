"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../components/Themed");
var LoginScreen = function () {
    return (React.createElement(react_native_1.ScrollView, null,
        React.createElement(Themed_1.View, null,
            React.createElement(Themed_1.View, null,
                React.createElement(react_native_1.Image, { source: require("./assets/images/yoga-logo.webp"), style: styles.image }),
                React.createElement(Themed_1.Text, null, "LeTrip")))));
};
var styles = react_native_1.StyleSheet.create({
    image: {
        width: "30rem",
        height: "30rem",
        borderRadius: 20
    }
});
exports["default"] = LoginScreen;
