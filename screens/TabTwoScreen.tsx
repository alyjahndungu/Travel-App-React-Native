import * as React from "react";
import { StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/skier-illustration.png")}
          style={{
            width: 320,
            height: 190,
            borderRadius: 20,
            marginVertical: 30,
            alignSelf: "center",
          }}
        />
        <View style={styles.holder}>
          <View style={styles.optionsholder}>
            <TouchableOpacity style={styles.carstyle} onPress={() => {}}>
              <Ionicons name="ios-car" size={37} color="#1976d2" />
              <Text style={styles.text}>Taxi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bus} onPress={() => {}}>
              <Ionicons name="ios-bus" size={37} color="#536dfe" />
              <Text style={styles.text}>Bus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.airplane} onPress={() => {}}>
              <Ionicons name="ios-jet" size={37} color="#3949ab" />
              <Text style={styles.text}>Flight</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.train} onPress={() => {}}>
              <Ionicons name="ios-train" size={37} color="#1a237e" />
              <Text style={styles.text}>Train</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionstwo}>
            <TouchableOpacity style={styles.airplane} onPress={() => {}}>
              <Ionicons name="ios-compass" size={37} color="#1e88e5" />
              <Text style={styles.text}>Adventure</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.carstyle} onPress={() => {}}>
              <Ionicons name="ios-cafe" size={37} color="#fff" />
              <Text style={styles.text}>Eats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.train} onPress={() => {}}>
              <Ionicons name="ios-bonfire" size={37} color="#e53935" />
              <Text style={styles.text}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bus} onPress={() => {}}>
              <Ionicons name="ios-bed" size={37} color="#7986cb" />
              <Text style={styles.text}>Hotels</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.title}>Destination</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.destination}>
            <View style={styles.pagination}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require("../assets/images/skier-illustration.png")}
                  style={{
                    width: 100,
                    height: 140,
                    borderRadius: 20,
                    alignSelf: "center",
                  }}
                />
                <Text style={styles.text}>Hylax Hills</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require("../assets/images/skier-illustration.png")}
                  style={{
                    width: 100,
                    height: 140,
                    borderRadius: 20,
                    alignSelf: "center",
                  }}
                />
                <Text style={styles.text}>Hells Gate</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require("../assets/images/skier-illustration.png")}
                  style={{
                    width: 100,
                    height: 140,
                    borderRadius: 20,
                    alignSelf: "center",
                  }}
                />
                <Text style={styles.text}>Ngong Hills</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require("../assets/images/skier-illustration.png")}
                  style={{
                    width: 100,
                    height: 140,
                    borderRadius: 20,
                    alignSelf: "center",
                  }}
                />
                <Text style={styles.text}>Longonot</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
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
    marginRight: 200,
    marginBottom: 5,
    fontFamily: "Nunito_Regular",
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
  destination: {
    marginBottom: 0,
  },
  holder: {
    marginVertical: 5,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  optionstwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  carstyle: {
    backgroundColor: "#e1bee7",
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
  text: {
    fontFamily: "Nunito_Regular",
  },
});
