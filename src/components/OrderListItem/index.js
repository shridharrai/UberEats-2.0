import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const OrderListItem = ({ order }) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </View>
  );
};

export default OrderListItem;
