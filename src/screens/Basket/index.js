import { styles } from "./styles";
import resturants from "../../../assets/data/restaurants.json";
import { FlatList, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import BasketDishItem from "../../components/BasketDishItem";

const restaurant = resturants[0];

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={styles.heading}>Your items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.seperator} />

      <View style={styles.button}>
        <Text style={styles.btnTxt}>Create order</Text>
      </View>
    </View>
  );
};

export default Basket;
