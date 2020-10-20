"use strict";
exports.__esModule = true;
var Linking = require("expo-linking");
exports["default"] = {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    TabOne: {
                        screens: {
                            TabOneScreen: 'one'
                        }
                    },
                    TabTwo: {
                        screens: {
                            TabTwoScreen: 'two'
                        }
                    },
                    Destination: {
                        screens: {
                            DestinationDetails: 'destination'
                        }
                    }
                }
            },
            NotFound: '*'
        }
    }
};
