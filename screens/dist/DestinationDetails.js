"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../components/Themed");
var Stats_1 = require("./Stats");
var DestinationDetails = function () {
    return (React.createElement(Themed_1.View, { style: styles.container },
        React.createElement(react_native_1.Image, { source: require("../assets/images/skier-illustration.png"), style: {
                width: 350,
                height: "60%",
                borderRadius: 30,
                marginVertical: 10,
                flex: 0.9
            } })));
    return (React.createElement(Themed_1.View, { style: styles.container },
        React.createElement(Stats_1["default"], null)));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#e0e0e0",
        justifyContent: "center"
    }
});
exports["default"] = DestinationDetails;
