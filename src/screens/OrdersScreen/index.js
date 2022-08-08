import { FlatList, Text, View } from "react-native";
import OrderListItem from "../../components/OrderListItem";
import { useOrderContext } from "../../hooks/providers";
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
