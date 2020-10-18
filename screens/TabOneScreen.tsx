import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from '../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <Image
              source={require("../assets/images/happyone.png")}
              style={{ width: 400, height: 300, alignSelf: "center" }}
            />
      <Text style={styles.title}>Digital ticket</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.about}>Easy solution to buy tickets for your travel, business trips, transportation, lodging and culnary.</Text>
      
        <TouchableOpacity style={styles.continue} onPress={() => {
                Actions.chat({ name: this.state.name });
              }}>
                <Ionicons
                  name="md-arrow-round-forward"
                  size={37}
                  color="#fff"
                />
              </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  about:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  continue: {
    backgroundColor: '#1e88e5',
    height: 40,
    marginTop: 20,
    width: '70%',
    alignItems: 'center',
    borderRadius: 20
  }
});
