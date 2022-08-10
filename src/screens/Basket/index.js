import { styles } from "./styles";
import { FlatList, Pressable, Text, View } from "react-native";
import BasketDishItem from "../../components/BasketDishItem";
import { useNavigation } from "@react-navigation/native";
import { useBasketContext } from "../../contexts/BasketContext";
import { useOrderContext } from "../../contexts/OrderContext";

const Basket = () => {
  const { resturant, basketDishes, totalPrice, setBasket } = useBasketContext();
  const { createOrder } = useOrderContext();
  const navigation = useNavigation();

  const onCreateOrder = async () => {
    await createOrder();
    setBasket(null);
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
