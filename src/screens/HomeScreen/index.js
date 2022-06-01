import { FlatList, StyleSheet, View } from "react-native";
import ResturantItem from "../../components/ResturantItem";
import resturants from "../../../assets/data/restaurants.json";

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={resturants}
        renderItem={({ item }) => <ResturantItem resturant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
