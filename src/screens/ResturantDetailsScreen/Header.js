import styles from "./styles";
import { Image, Text, View } from "react-native";

const DEFAULT_IMAGE =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg";

export const ResturantHeader = ({ resturant }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: resturant.image.startsWith("http")
            ? resturant.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{resturant.name}</Text>
        <Text style={styles.subtitle}>
          $ {resturant.deliveryFee.toFixed(1)} &#8226;{" "}
          {resturant.minDeliveryTime}-{resturant.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};
