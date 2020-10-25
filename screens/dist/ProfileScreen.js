"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var Themed_1 = require("../components/Themed");
var ProfileScreen = function () {
    return (React.createElement(react_native_1.SafeAreaView, { style: styles.container },
        React.createElement(react_native_1.ScrollView, { showVerticalScrollIndicator: "false" },
            React.createElement(Themed_1.View, { style: styles.titleBar },
                React.createElement(vector_icons_1.Ionicons, { name: "ios-arrow-back", size: 24, color: "#52575D", style: { paddingLeft: 10 } }),
                React.createElement(vector_icons_1.Ionicons, { name: "md-more", size: 24, color: "#52575D" })),
            React.createElement(Themed_1.View, { style: { alignSelf: "center" } },
                React.createElement(Themed_1.View, { style: styles.profileImage },
                    React.createElement(react_native_1.Image, { source: require("../assets/images/IMG_20190204_103334~2.jpg"), style: {
                            width: 200,
                            height: 200,
                            borderRadius: 100,
                            overflow: 'hidden'
                        } })),
                React.createElement(Themed_1.View, { style: styles.dm },
                    React.createElement(vector_icons_1.Ionicons, { name: "ios-text", size: 26, color: "#DFD8C8" })),
                React.createElement(Themed_1.View, { style: style.dm })))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginHorizontal: 16,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9
    },
    dm: {
        backgroundColor: '#41444B',
        position: 'absolute',
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    active: {
        backgroundColor: '#34FFB9',
        position: 'absolute',
        bottom: 28,
        left: 10,
        padding: 4,
        width: 20,
        height: 20,
        borderRadius: 10
    }
});
exports["default"] = ProfileScreen;
