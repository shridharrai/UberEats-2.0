import { DataStore } from "aws-amplify";
import { createContext, useEffect, useState } from "react";
import { useAuthContext, useBasketContext } from "../hooks/providers";
import { Order, OrderDish } from "../models";

export const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();
  const { resturant, totalPrice, basketDishes, basket } = useBasketContext();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    DataStore.query(Order, (o) => o.userID("eq", dbUser?.id)).then(setOrders);
  }, [dbUser]);

  const createOrder = async () => {
    //Create the Order
    const newOrder = await DataStore.save(
      new Order({
        userID: dbUser?.id,
        Restaurant: resturant,
        status: "NEW",
        total: totalPrice,
      })
    );

    //Add all basketDishes to the Order
    await Promise.all(
      basketDishes.map((basketDish) =>
        DataStore.save(
          new OrderDish({
            quantity: basketDish.quantity,
            orderID: newOrder.id,
            Dish: basketDish.Dish,
          })
        )
      )
    );

    //Delete basket
    await DataStore.delete(basket);

    setOrders([...orders, newOrder]);
  };

  const getOrder = async (id) => {
    const order = await DataStore.query(Order, id);
    const orderDishes = await DataStore.query(OrderDish, (od) =>
      od.orderID("eq", id)
    );
    return {
      ...order,
      dishes: orderDishes,
    };
  };

  return (
    <OrderContext.Provider value={{ createOrder, orders, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
