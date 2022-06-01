import { Text, View } from "react-native";
import { styles } from "./styles";

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "600" }}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>$ {basketDish.price}</Text>
    </View>
  );
};

export default BasketDishItem;
