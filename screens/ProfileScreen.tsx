import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from '../components/Themed';

const ProfileScreen = () => {

    return(
    <SafeAreaView style={styles.container}>
       <ScrollView showVerticalScrollIndicator="false">
         <View style={styles.titleBar}>
           <Ionicons name="ios-arrow-back" size={24} color="#52575D" style={{paddingLeft: 10}}></Ionicons>
           <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
         </View>

         <View style={{alignSelf:"center"}}> 
           <View style={styles.profileImage}> 
                 <Image
        source={require("../assets/images/IMG_20190204_103334~2.jpg")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          overflow: 'hidden'
         
        }}
      />
           </View>

           <View style={styles.dm}>
           <Ionicons name="ios-text" size={26} color="#DFD8C8" ></Ionicons>
         </View>

<View style={styles.active}>
  <View style={styles.add}>
           <Ionicons name="ios-add" size={48} color="#DFD8C8" ></Ionicons>
  </View>
</View>

         </View>
       </ScrollView>

    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
      backgroundColor:'#41444B',
      position:'absolute',
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
  },
  add: {
      backgroundColor:'#41444B',
      position:'absolute',
      top: 20,
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center'
  }

});
export default ProfileScreen;