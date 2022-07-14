import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";

const DEFAULT_IMAGE =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg";

const ResturantItem = ({ resturant }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Restaurant", { id: resturant.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.resturantContainer}>
      <Image
        style={styles.image}
        source={{
          uri: resturant.image.startsWith("http")
            ? resturant.image
            : DEFAULT_IMAGE,
        }}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{resturant.name}</Text>
          <Text style={styles.subtitle}>
            $ {resturant.deliveryFee.toFixed(1)} &#8226;{" "}
            {resturant.minDeliveryTime}-{resturant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{resturant.rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ResturantItem;
