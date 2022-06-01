import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});

export default styles;
