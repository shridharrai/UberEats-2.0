import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import resturants from "../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import { ResturantHeader } from "./Header";

const resturant = resturants[0];

const ResturantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <ResturantHeader resturant={resturant} />}
        data={resturant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />

      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default ResturantDetailsScreen;
