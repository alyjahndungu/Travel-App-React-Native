import * as React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showVerticalScrollIndicator="false">
        <View style={styles.titleBar}>
          <Ionicons
            name="ios-arrow-back"
            size={24}
            color="#52575D"
            style={{ paddingLeft: 10 }}
          ></Ionicons>
          <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../assets/images/IMG_20190204_103334~2.jpg")}
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                overflow: "hidden",
              }}
            />
          </View>

          <View style={styles.dm}>
            <Ionicons name="ios-text" size={26} color="#DFD8C8"></Ionicons>
          </View>

          <View style={styles.active}>
            <View style={styles.add}>
              <Ionicons
                name="ios-add"
                size={48}
                color="#DFD8C8"
                style={{ marginTop: 6, marginLeft: 2 }}
              ></Ionicons>
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>E.N Ternstone</Text>
          <Text style={styles.about}>Software Engineer</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={styles.about}>9+</Text>
            <Text style={styles.subText}>Projects</Text>
          </View>

          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={styles.about}>3+</Text>
            <Text style={styles.subText}>Expirience</Text>
          </View>

          <View style={styles.statsBox}>
            <Text style={styles.about}>4+</Text>
            <Text style={styles.subText}>Languages</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 16,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    left: 147,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 26,
  },
  name: {
    fontFamily: "Nunito_Regular",
    fontSize: 23,
  },
  about: {
    fontFamily: "Nunito_Regular",
  },
  subText: {
    fontFamily: "Nunito_Regular",
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
});
export default ProfileScreen;
