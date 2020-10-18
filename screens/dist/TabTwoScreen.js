"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var EditScreenInfo_1 = require("../components/EditScreenInfo");
var Themed_1 = require("../components/Themed");
function TabTwoScreen() {
    return (React.createElement(Themed_1.View, { style: styles.container },
        React.createElement(react_native_1.Image, { source: require("../assets/images/skier-illustration.png"), style: {
                width: 300,
                height: 200,
                borderRadius: 20,
                marginBottom: 60,
                alignSelf: "center"
            } }),
        React.createElement(Themed_1.View, { style: styles.holder },
            React.createElement(Themed_1.View, { style: styles.optionsholder },
                React.createElement(react_native_1.TouchableOpacity, { style: styles.carstyle, onPress: function () { } },
                    React.createElement(vector_icons_1.Ionicons, { name: "md-car", size: 37, color: "#1976d2" }),
                    React.createElement(Themed_1.Text, null, "Cab")),
                React.createElement(react_native_1.TouchableOpacity, { style: styles.bus, onPress: function () { } },
                    React.createElement(vector_icons_1.Ionicons, { name: "md-bus", size: 37, color: "#536dfe" }),
                    React.createElement(Themed_1.Text, null, "Bus")),
                React.createElement(react_native_1.TouchableOpacity, { style: styles.airplane, onPress: function () { } },
                    React.createElement(vector_icons_1.Ionicons, { name: "md-airplane", size: 37, color: "#ff4081" }),
                    React.createElement(Themed_1.Text, null, "Flight")),
                React.createElement(react_native_1.TouchableOpacity, { style: styles.train, onPress: function () { } },
                    React.createElement(vector_icons_1.Ionicons, { name: "md-train", size: 37, color: "#1a237e" }),
                    React.createElement(Themed_1.Text, null, "Train"))),
            React.createElement(Themed_1.View, { style: styles.optionstwo },
                React.createElement(react_native_1.TouchableOpacity, { style: styles.carstyle, onPress: function () { } },
                    React.createElement(vector_icons_1.Ionicons, { name: "md-car", size: 37, color: "#fff" }),
                    React.createElement(Themed_1.Text, null, "Cab")),
                React.createElement(react_native_1.TouchableOpacity, { style: styles.train, onPress: function () { } },
                    React.createElement(vector_icons_1.Ionicons, { name: "md-train", size: 37, color: "#fff" }),
                    React.createElement(Themed_1.Text, null, "Train")),
                React.createElement(react_native_1.TouchableOpacity, { style: styles.bus, onPress: function () { } },
                    React.createElement(vector_icons_1.Ionicons, { name: "md-bed", size: 37, color: "#fff" }),
                    React.createElement(Themed_1.Text, null, "Hotels")),
                React.createElement(react_native_1.TouchableOpacity, { style: styles.airplane, onPress: function () { } },
                    React.createElement(vector_icons_1.Ionicons, { name: "md-", size: 37, color: "#1e88e5" }),
                    React.createElement(Themed_1.Text, null, "bus")))),
        React.createElement(Themed_1.Text, { style: styles.title }, "Tab Two"),
        React.createElement(Themed_1.View, { style: styles.separator, lightColor: "#eee", darkColor: "rgba(255,255,255,0.1)" }),
        React.createElement(EditScreenInfo_1["default"], { path: "Flight" })));
}
exports["default"] = TabTwoScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%"
    },
    optionsholder: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    optionstwo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20
    },
    carstyle: {
        backgroundColor: "#ffd740",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: "22%"
    },
    airplane: {
        backgroundColor: "#c5cae9",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: "22%"
    },
    train: {
        backgroundColor: "#81d4fa",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: "22%"
    },
    bus: {
        backgroundColor: "#e0f7fa",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: "22%"
    }
});
