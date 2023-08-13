import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView} from 'react-native';
import AppNavigator from './src/Components/AppNavigator';



const App = () =>{
  return (    
        <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
}); 

export default App;