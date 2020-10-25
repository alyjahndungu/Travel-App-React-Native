"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../components/Themed");
var Stats = function () {
    React.createElement(Themed_1.View, { style: styles.container },
        React.createElement(Themed_1.View, { style: styles.statContainer },
            React.createElement(Themed_1.Text, { style: styles.statNumber }, "Stats")));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 0.7,
        marginHorizontal: 16,
        borderRadius: 16
    },
    statContainer: {
        backgroundColor: '#ff33aaff',
        marginBottom: 20
    }
});
exports["default"] = Stats;
