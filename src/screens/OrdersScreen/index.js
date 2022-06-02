import { FlatList, Text, View } from "react-native";
import orders from "../../../assets/data/orders.json";
import OrderListItem from "../../components/OrderListItem";
import { styles } from "./styles";

const OrderScreen = () => {
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
