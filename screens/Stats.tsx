import * as React from "react";
import { StyleSheet, Image, TouchableOpacity, Box } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";

const Stats = () => {
  <View style={styles.container}>
    <View style={styles.statContainer}>
      <Text style={styles.statNumber}>Stats</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  statContainer: {
    backgroundColor: "#ff33aaff",
    marginBottom: 20,
  },
});

export default Stats;
