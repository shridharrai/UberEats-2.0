import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";

const ResturantItem = ({ resturant }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Restaurant", { id: resturant.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.resturantContainer}>
      <Image style={styles.image} source={{ uri: resturant.image }} />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{resturant.name}</Text>
          <Text style={styles.subtitle}>
            $ {resturant.deliveryFee} &#8226; {resturant.minDeliveryTime}-
            {resturant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{resturant.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ResturantItem;
