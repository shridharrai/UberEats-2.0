import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import resturants from "../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import { ResturantHeader } from "./Header";
import { useNavigation, useRoute } from "@react-navigation/native";

const resturant = resturants[0];

const ResturantDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <ResturantHeader resturant={resturant} />}
        data={resturant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />

      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default ResturantDetailsScreen;
