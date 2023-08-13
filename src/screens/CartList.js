import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import AddedItem from '../Components/AddedItem';


const CartList = (props) => {
  let [total, setTotal]= useState(0);

  const cartItems = useSelector((state) => state.reducer);
  
    useEffect(()=>{
      let prices = []
      cartItems.forEach((item)=>{
          prices.push(item.price)
      })

      let amt = prices.reduce((sum, item) => (sum + item), 0)
      //console.log(prices)
      setTotal(amt)
    })
  
  return (
    <View style={styles.container} >
      
      <Text style={styles.userText}> Total Items: {cartItems.length}</Text>
      <Text style={[styles.userText, {fontSize:30, fontWeight:'bold'}]}> Total Price: {total} </Text>

      <ScrollView>
        {
          cartItems.map((element) => <AddedItem item={element} />)
        }
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2fbf',
    marginBottom:50
  },
  userText: {
    color: 'teal',
    justifyContent: 'center',
    fontSize: 40,
  },
  userBtn: { 
    justifyContent: 'center',
     backgroundColor: '#ab21de', 
     alignItems: 'center' }
});



export default CartList;



