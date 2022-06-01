import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Basket from "./src/screens/Basket";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ResturantDetailsScreen from "./src/screens/ResturantDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <ResturantDetailsScreen /> */}
      {/* <DishDetailsScreen /> */}
      <Basket />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
  },
});
