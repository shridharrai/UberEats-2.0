import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ResturantItem from "../../components/ResturantItem";
import { Restaurant } from "../../models";

const HomeScreen = () => {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    DataStore.query(Restaurant).then(setResturants);
  }, []);

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
