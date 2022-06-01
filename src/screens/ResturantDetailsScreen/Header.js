import styles from "./styles";
import { Image, Text, View } from "react-native";

export const ResturantHeader = ({ resturant }) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: resturant.image }} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{resturant.name}</Text>
        <Text style={styles.subtitle}>
          $ {resturant.deliveryFee} &#8226; {resturant.minDeliveryTime}-
          {resturant.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};
