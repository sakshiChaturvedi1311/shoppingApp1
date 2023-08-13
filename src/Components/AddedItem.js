import React, { useEffect, useState }from 'react';
import {
  StyleSheet,
  Text,
  View, 
  Image,
  Button,
  ScrollView
} from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import { removeFromCart } from '../redux/action';


const AddedItem = (props) =>{
      
  const item = props.item ;
  const dispatch = useDispatch();
  //const cartItems = useSelector((state) => state.reducer);
  
  //const [isAdded, setIsAdded] = useState(false);
  //const [qty, setQty] = useState(1);
  
  const handleRemoveFromCart=(item)=>{
    dispatch(removeFromCart(item.id))
  }


   
  return (    
        
          <ScrollView>
          <View style={ styles.container }>
            <Text style= {styles.itemText}>{item.name}</Text>
            <Image style = {styles.itemImage} source={item.image}/>
            <Text style= {styles.itemText}>{item.price}</Text>
            <View>
            <Button title= "Remove from Cart" onPress={()=>{handleRemoveFromCart(item)}}></Button>
            </View>
            </View>
          </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomColor: 'orange',
    borderBottomWidth:2,
    padding:10,
    marginBottom:20,
  },
  itemText:{
    fontSize:20
  },
  itemImage:{
    width:40,
    height:40
  }
  
});

export default AddedItem;


