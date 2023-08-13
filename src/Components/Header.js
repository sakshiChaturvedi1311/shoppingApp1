import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
   View, 
   Image,
   TouchableOpacity
} from 'react-native';
import {useSelector} from 'react-redux'


const Header = (props) =>{
    const cartData = useSelector((state)=>state.reducer)
    //console.warn(cartData)
    const [cartItems, setCartItems]= useState(0) 

    useEffect(()=>{
      setCartItems(cartData.length)
    }, [cartData])


  return (    
        <View style = {styles.container} >
            <View style = {{alignItems:"center"}}>
           <Text style= {{fontSize:30}}> {cartItems} </Text> 
           </View>
           <View>
           <TouchableOpacity onPress={()=>props.navigation.navigate("Cart")}>           
            <Image style = {{width:40,height:40}} source={{uri:'https://www.iconpacks.net/icons/2/free-icon-shopping-cart-2028.png'}}/>         
            </TouchableOpacity>

           </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems:'flex-end',
    backgroundColor:"gold"
  },
})

export default Header;
