import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView} from 'react-native';



const UserDetails = (props) =>{
  
  return (    
        <View style={ styles.container }>
          <Text style={ styles.userDetail }> Name: Sakshi Chaturvedi </Text>
          <Text style={ styles.userDetail }> Address: Kota </Text>
          <Text style={ styles.userDetail }> Mobile: 987456321 </Text>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#2fbf'
  },
  userDetail: {
    color: 'teal',
    justifyContent:'center',
    fontSize:30,
    fontWeight: 'bold'
  }
}); 

export default UserDetails;