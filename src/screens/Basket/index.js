import { styles } from "./styles";
import { FlatList, Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import BasketDishItem from "../../components/BasketDishItem";
import { useBasketContext, useOrderContext } from "../../hooks/providers";
import { useNavigation } from "@react-navigation/native";

const Basket = () => {
  const { resturant, basketDishes, totalPrice } = useBasketContext();
  const { createOrder } = useOrderContext();
  const navigation = useNavigation();

  const onCreateOrder = async () => {
    await createOrder();
    navigation.goBack();
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{resturant?.name}</Text>

      <Text style={styles.heading}>Your items</Text>

      <FlatList
        data={basketDishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.seperator} />

      <Pressable onPress={onCreateOrder} style={styles.button}>
        <Text style={styles.btnTxt}>
          Create order &#8226; ${totalPrice.toFixed(2)}
        </Text>
      </Pressable>
    </View>
  );
};

export default Basket;
