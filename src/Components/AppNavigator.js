import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CartList from '../screens/CartList';
import UserDetails from '../screens/UserDetails';

const Stack = createNativeStackNavigator();

const AppNavigator = ()=>{
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name= "Home" component={HomeScreen}/>
            <Stack.Screen name= "User" component={UserDetails}/>
            <Stack.Screen name= "Cart" component={CartList}/>


        </Stack.Navigator>
    </NavigationContainer>
  )
} 

export default AppNavigator;