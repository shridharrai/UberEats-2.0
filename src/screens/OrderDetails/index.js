import { ActivityIndicator, FlatList } from "react-native";
import resturants from "../../../assets/data/restaurants.json";
import styles from "./styles";
import BasketDishItem from "../../components/BasketDishItem";
import { OrderDetailsHeader } from "./Header";
import { useOrderContext } from "../../hooks/providers";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

const OrderDetails = () => {
  const { getOrder } = useOrderContext();
  const [order, setOrder] = useState(null);
  const route = useRoute();
  const id = route.params?.id;

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, []);

  if (!order) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={{ flex: 1, justifyContent: "center" }}
      />
    );
  }
  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      data={order.dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
