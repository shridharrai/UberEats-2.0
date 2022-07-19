import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import { ResturantHeader } from "./Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Dish, Restaurant } from "../../models";

const ResturantDetailsScreen = () => {
  const [resturant, setResturant] = useState(null);
  const [dishes, setDishes] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;

  useEffect(() => {
    if (id) {
      //Fetch the restaurant with specific id
      DataStore.query(Restaurant, id).then(setResturant);
      //Fecth the Dishes of the restaurant
      DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(
        setDishes
      );
    }
  }, [id]);

  if (!resturant) {
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
      <FlatList
        ListHeaderComponent={() => <ResturantHeader resturant={resturant} />}
        data={dishes}
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
