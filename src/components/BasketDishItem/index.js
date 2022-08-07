import { Text, View } from "react-native";
import { styles } from "./styles";

const BasketDishItem = ({ basketDish }) => {
  const { quantity, Dish } = basketDish;

  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{quantity}</Text>
      </View>
      <Text style={{ fontWeight: "600" }}>{Dish?.name}</Text>
      <Text style={{ marginLeft: "auto" }}>$ {Dish?.price}</Text>
    </View>
  );
};

export default BasketDishItem;
