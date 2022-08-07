import { styles } from "./styles";
import { FlatList, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import BasketDishItem from "../../components/BasketDishItem";
import { useBasketContext } from "../../hooks/providers";

const Basket = () => {
  const { resturant, basketDishes, totalPrice } = useBasketContext();
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{resturant?.name}</Text>

      <Text style={styles.heading}>Your items</Text>

      <FlatList
        data={basketDishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.seperator} />

      <View style={styles.button}>
        <Text style={styles.btnTxt}>
          Create order &#8226; ${totalPrice.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default Basket;
