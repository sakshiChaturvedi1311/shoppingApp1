import React, { useEffect, useState }from 'react';
import {
  StyleSheet,
  Text,
  View, 
  Image,
  Button
} from 'react-native';
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/action';


const Product = (props) =>{
     
  const item = props.item ;
  const dispatch = useDispatch();
  
  const handleAddToCart=(item)=>{
    dispatch(addToCart(item))
  }

  return (    
        <View style={ styles.container }>
            <Text style= {{fontSize:24}}>{item.name}</Text>
            <Text style= {{fontSize:24}}>{item.price}</Text>
            <Image style = {{width:100,height:100}}source={item.image}/>
            
            <Button title= "Add To Cart" onPress={()=>{handleAddToCart(item)}}></Button>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    borderBottomColor: 'orange',
    borderBottomWidth:2,
    padding:10,
    marginBottom:50,
  },
  
});

export default Product;



