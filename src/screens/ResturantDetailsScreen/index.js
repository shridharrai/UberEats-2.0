import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import { ResturantHeader } from "./Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

const ResturantDetailsScreen = () => {
  const [resturant, setResturant] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;

  useEffect(() => {
    DataStore.query(Restaurant, id).then(setResturant);
  }, []);

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
