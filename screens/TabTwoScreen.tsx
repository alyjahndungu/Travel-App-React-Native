import * as React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/skier-illustration.png")}
        style={{
          width: 300,
          height: 200,
          borderRadius: 20,
          marginBottom: 60,
          alignSelf: "center",
        }}
      />
      <View style={styles.holder}>
        <View style={styles.optionsholder}>
          <TouchableOpacity style={styles.carstyle} onPress={() => {}}>
            <Ionicons name="md-car" size={37} color="#1976d2" />
            <Text>Cab</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bus} onPress={() => {}}>
            <Ionicons name="md-bus" size={37} color="#536dfe" />
            <Text>Bus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.airplane} onPress={() => {}}>
            <Ionicons name="md-airplane" size={37} color="#ff4081" />
            <Text>Flight</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.train} onPress={() => {}}>
            <Ionicons name="md-train" size={37} color="#fff" />
            <Text>Train</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionsholder}>
          <TouchableOpacity style={styles.carstyle} onPress={() => {}}>
            <Ionicons name="md-car" size={37} color="#fff" />
            <Text>Cab</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bus} onPress={() => {}}>
            <Ionicons name="md-bus" size={37} color="#fff" />
            <Text>Bus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.airplane} onPress={() => {}}>
            <Ionicons name="md-airplane" size={37} color="#1e88e5" />
            <Text>bus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.train} onPress={() => {}}>
            <Ionicons name="md-train" size={37} color="#fff" />
            <Text >Train</Text>

          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="Flight" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  optionsholder: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  carstyle: {
    backgroundColor: "#ffd740",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "22%",
  },
  airplane: {
    backgroundColor: "#c5cae9",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "22%",
  },
  train: {
    backgroundColor: "#81d4fa",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "22%",
  },
  bus: {
    backgroundColor: "#e0f7fa",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "22%",
  },
});
