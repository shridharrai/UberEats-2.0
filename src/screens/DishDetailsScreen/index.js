import { styles } from "./styles";
import resturants from "../../../assets/data/restaurants.json";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const dish = resturants[0].dishes[0];

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const onMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onPlusClick = () => {
    setQuantity(quantity + 1);
  };
  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.seperator} />

      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={60}
          color={"black"}
          onPress={onMinusClick}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={60}
          color={"black"}
          onPress={onPlusClick}
        />
      </View>

      <View style={styles.button}>
        <Text style={styles.btnTxt}>
          Add {quantity} to basket &#8226; ${getTotal()}
        </Text>
      </View>
    </View>
  );
};

export default DishDetailsScreen;
