import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from '../components/Themed';


const LoginScreen = () => {
     return(
      <ScrollView>
        <View>
        <View>
        <Image source={require("./assets/images/yoga-logo.webp")} style={styles.image}/> 
        <Text>LeTrip</Text>
        </View>
        
        </View>
      </ScrollView>

     );

}
const styles = StyleSheet.create({
     image: {
         width: '30rem',
         height: '30rem',
         borderRadius: 20
     }

});

export default LoginScreen;