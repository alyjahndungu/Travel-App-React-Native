"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var Themed_1 = require("../components/Themed");
function TabTwoScreen() {
    return (React.createElement(react_native_1.ScrollView, null,
        React.createElement(Themed_1.View, { style: styles.container },
            React.createElement(react_native_1.Image, { source: require("../assets/images/skier-illustration.png"), style: {
                    width: 320,
                    height: 190,
                    borderRadius: 20,
                    marginVertical: 30,
                    alignSelf: "center"
                } }),
            React.createElement(Themed_1.View, { style: styles.holder },
                React.createElement(Themed_1.View, { style: styles.optionsholder },
                    React.createElement(react_native_1.TouchableOpacity, { style: styles.carstyle, onPress: function () { } },
                        React.createElement(vector_icons_1.Ionicons, { name: "ios-car", size: 37, color: "#1976d2" }),
                        React.createElement(Themed_1.Text, { style: styles.text }, "Taxi")),
                    React.createElement(react_native_1.TouchableOpacity, { style: styles.bus, onPress: function () { } },
                        React.createElement(vector_icons_1.Ionicons, { name: "ios-bus", size: 37, color: "#536dfe" }),
                        React.createElement(Themed_1.Text, { style: styles.text }, "Bus")),
                    React.createElement(react_native_1.TouchableOpacity, { style: styles.airplane, onPress: function () { } },
                        React.createElement(vector_icons_1.Ionicons, { name: "ios-jet", size: 37, color: "#3949ab" }),
                        React.createElement(Themed_1.Text, { style: styles.text }, "Flight")),
                    React.createElement(react_native_1.TouchableOpacity, { style: styles.train, onPress: function () { } },
                        React.createElement(vector_icons_1.Ionicons, { name: "ios-train", size: 37, color: "#1a237e" }),
                        React.createElement(Themed_1.Text, { style: styles.text }, "Train"))),
                React.createElement(Themed_1.View, { style: styles.optionstwo },
                    React.createElement(react_native_1.TouchableOpacity, { style: styles.airplane, onPress: function () { } },
                        React.createElement(vector_icons_1.Ionicons, { name: "ios-compass", size: 37, color: "#1e88e5" }),
                        React.createElement(Themed_1.Text, { style: styles.text }, "Adventure")),
                    React.createElement(react_native_1.TouchableOpacity, { style: styles.carstyle, onPress: function () { } },
                        React.createElement(vector_icons_1.Ionicons, { name: "ios-cafe", size: 37, color: "#fff" }),
                        React.createElement(Themed_1.Text, { style: styles.text }, "Eats")),
                    React.createElement(react_native_1.TouchableOpacity, { style: styles.train, onPress: function () { } },
                        React.createElement(vector_icons_1.Ionicons, { name: "ios-bonfire", size: 37, color: "#e53935" }),
                        React.createElement(Themed_1.Text, { style: styles.text }, "Events")),
                    React.createElement(react_native_1.TouchableOpacity, { style: styles.bus, onPress: function () { } },
                        React.createElement(vector_icons_1.Ionicons, { name: "ios-bed", size: 37, color: "#7986cb" }),
                        React.createElement(Themed_1.Text, { style: styles.text }, "Hotels")))),
            React.createElement(Themed_1.Text, { style: styles.title }, "Destination"),
            React.createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false },
                React.createElement(Themed_1.View, { style: styles.destination },
                    React.createElement(Themed_1.View, { style: styles.pagination },
                        React.createElement(react_native_1.TouchableOpacity, { onPress: function () { } },
                            React.createElement(react_native_1.Image, { source: require("../assets/images/skier-illustration.png"), style: {
                                    width: 100,
                                    height: 140,
                                    borderRadius: 20,
                                    alignSelf: "center"
                                } }),
                            React.createElement(Themed_1.Text, { style: styles.text }, "Hylax Hills")),
                        React.createElement(react_native_1.TouchableOpacity, { onPress: function () { } },
                            React.createElement(react_native_1.Image, { source: require("../assets/images/skier-illustration.png"), style: {
                                    width: 100,
                                    height: 140,
                                    borderRadius: 20,
                                    alignSelf: "center"
                                } }),
                            React.createElement(Themed_1.Text, { style: styles.text }, "Hells Gate")),
                        React.createElement(react_native_1.TouchableOpacity, { onPress: function () { } },
                            React.createElement(react_native_1.Image, { source: require("../assets/images/skier-illustration.png"), style: {
                                    width: 100,
                                    height: 140,
                                    borderRadius: 20,
                                    alignSelf: "center"
                                } }),
                            React.createElement(Themed_1.Text, { style: styles.text }, "Ngong Hills")),
                        React.createElement(react_native_1.TouchableOpacity, { onPress: function () { } },
                            React.createElement(react_native_1.Image, { source: require("../assets/images/skier-illustration.png"), style: {
                                    width: 100,
                                    height: 140,
                                    borderRadius: 20,
                                    alignSelf: "center"
                                } }),
                            React.createElement(Themed_1.Text, { style: styles.text }, "Longonot"))))))));
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
        marginRight: 200,
        marginBottom: 5,
        fontFamily: "Nunito_Regular"
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
    destination: {
        marginBottom: 0
    },
    holder: {
        marginVertical: 5
    },
    pagination: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    optionstwo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    carstyle: {
        backgroundColor: "#e1bee7",
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
    },
    text: {
        fontFamily: "Nunito_Regular"
    }
});
