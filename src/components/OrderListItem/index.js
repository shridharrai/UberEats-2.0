import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useOrderContext } from "../../contexts/OrderContext";
import { styles } from "./styles";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();
  const [noOfItems, setNoOfItems] = useState(0);
  const { getOrder } = useOrderContext();

  useEffect(() => {
    getOrder(order.id).then((od) => setNoOfItems(od.dishes.length));
  }, [order]);

  return (
    <Pressable
      onPress={() => navigation.navigate("Order", { id: order.id })}
      style={styles.page}
    >
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={{ marginVertical: 5 }}>
          {noOfItems} items &#8226; ${order.total.toFixed(2)}
        </Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;
