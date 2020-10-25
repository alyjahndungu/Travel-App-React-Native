import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, Box } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from '../components/Themed';
import  Stats from './Stats';

const  DestinationDetails = () => {
  return (
    <View style={styles.container}>
   
        <Image
        source={require("../assets/images/skier-illustration.png")}
        style={{
          width: 350,
          height: '60%',
          borderRadius: 30,
          marginVertical: 10,
          flex: 0.9
        }}
      />
    
 

    </View> 
    
    
  );

    return(
    <View style={styles.container}>
      <Stats />
      </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#e0e0e0',
    justifyContent: "center",
  }

});

export default DestinationDetails;