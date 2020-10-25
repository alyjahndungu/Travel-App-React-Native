"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
function NotFoundScreen(_a) {
    var navigation = _a.navigation;
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(react_native_1.Text, { style: styles.title }, "This screen doesn't exist."),
        React.createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.replace("Root"); }, style: styles.link },
            React.createElement(react_native_1.Text, { style: styles.linkText }, "Go to home screen!"))));
}
exports["default"] = NotFoundScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    link: {
        marginTop: 15,
        paddingVertical: 15
    },
    linkText: {
        fontSize: 14,
        color: "#2e78b7"
    }
});
