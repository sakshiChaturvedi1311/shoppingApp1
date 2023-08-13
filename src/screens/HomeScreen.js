import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import Product from '../Components/Product';



const HomeScreen = (props) => {

  const products = [
    {
      id: 100,
      name: 'Oranges',
      price: 180,
      image: require('../products/oranges.jpg'),
      description: '1 Kg Oranges. fresh oranges which are very rich in vitamin C'
    },
    {
      id: 101,
      name: 'Cherries',
      price: 200,
      image: require('../products/cherries.jpg'),
      description: '1 Kg Cherries. Fresh cherries which are tastes amazingly sweet and are supplied from Kashmir'
    },
    {
      id: 102,
      name: 'Exotic Cupcake Set',
      price: 350,
      image: require('../products/cupcakes.jpg'),
      description: 'An exotic assemble of cupcakes. gluton free bun. designed to serve 4 persons.'
    },
    {
      id: 103,
      name: "Cookies",
      price: 200,
      image: require('../products/cookies.jpg'),
      description: "An exotic assemble of cookies. A mix of chocolates flavoured, red velvet flavoured and salty flavoured cookies. Designed to serve 4 persons."
    },
    {
      id: 104,
      name: "flour",
      price: 300,
      image: require('../products/flour.jpg'),
      description: " 5 kg flour pack wheat flour which is high in gluten, with 12% to 14% gluten content, and its dough has elastic toughness that holds its shape well once baked. "
    },
    {
      id: 105,
      name: "Kidney Beans",
      price: 200,
      image: require('../products/kidneyBeans.jpg'),
      description: "1 Kg Kidney Beans. Used in a variety of traditional dishes, kidney beans are usually eaten well cooked"
    },
    {
      id: 106,
      name: "Lays Chips",
      price: 30,
      image: require('../products/chips2.jpg'),
      description: " 50g potato chips from Lays. Very tastey snacks for anytime munching "
    },
    {
      id: 107,
      name: "Uncle Chips",
      price: 20,
      image: require('../products/chipsUncle.jpg'),
      description: " 50g potato chips packat. Very tastey snacks for anytime munching "
    },
    {
      id: 108,
      name: "tomatoes",
      price: 80,
      image: require('../products/tomatoes.jpg'),
      description: " 1 kg Tomatoes. Fresh and raw. Straight from Farms to your doors. "
    }

  ]


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.userBtn}
        onPress={() => props.navigation.navigate("User")}>
        <Text style={styles.userText}> Go to User Details</Text>
      </TouchableOpacity>
      <Header navigation={props.navigation} />
      <ScrollView>
        {
          products.map((item) => <Product item={item} />)
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'ivory'
  },
  userText: {
    color: 'ivory',
    justifyContent: 'center',
    fontSize: 20,
  },
  userBtn: {
    justifyContent: 'center',
    backgroundColor: '#ab21de',
    alignItems: 'center'
  }
});

export default HomeScreen;