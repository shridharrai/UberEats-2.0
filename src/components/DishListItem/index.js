import { Image, Text, View } from "react-native";
import styles from "./styles";

const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </View>
  );
};

export default DishListItem;
