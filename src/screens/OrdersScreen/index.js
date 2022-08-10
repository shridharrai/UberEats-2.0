import { FlatList, View } from "react-native";
import OrderListItem from "../../components/OrderListItem";
import { useOrderContext } from "../../contexts/OrderContext";
import { styles } from "./styles";

const OrderScreen = () => {
  const { orders } = useOrderContext();

  return (
    <View style={styles.page}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrderScreen;
