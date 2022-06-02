import { FlatList } from "react-native";
import resturants from "../../../assets/data/restaurants.json";
import styles from "./styles";
import BasketDishItem from "../../components/BasketDishItem";
import { OrderDetailsHeader } from "./Header";

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={resturants[0].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
