import { styles } from "./styles";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Dish } from "../../models";

const DishDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;
  const [quantity, setQuantity] = useState(1);
  const [dish, setDish] = useState(null);

  useEffect(() => {
    if (id) {
      DataStore.query(Dish, id).then(setDish);
    }
  }, [id]);

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

  if (!dish) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={{ flex: 1, justifyContent: "center" }}
      />
    );
  }

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

      <Pressable
        onPress={() => navigation.navigate("Basket")}
        style={styles.button}
      >
        <Text style={styles.btnTxt}>
          Add {quantity} to basket &#8226; ${getTotal()}
        </Text>
      </Pressable>
    </View>
  );
};

export default DishDetailsScreen;
