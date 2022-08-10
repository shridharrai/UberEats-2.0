import { DataStore } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import { Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";

export const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();

  const [resturant, setBasketResturant] = useState(null);
  const [basket, setBasket] = useState(null);
  const [basketDishes, setBasketDishes] = useState([]);

  const totalPrice = basketDishes.reduce(
    (sum, basketDish) => sum + basketDish.quantity * basketDish.Dish.price,
    resturant?.deliveryFee
  );

  useEffect(() => {
    //Get the existing basket realted to logged in user and particular resturant
    DataStore.query(Basket, (b) =>
      b.restaurantID("eq", resturant?.id).userID("eq", dbUser?.id)
    ).then((baskets) => setBasket(baskets[0]));
  }, [resturant, dbUser]);

  useEffect(() => {
    if (basket) {
      DataStore.query(BasketDish, (bd) => bd.basketID("eq", basket.id)).then(
        setBasketDishes
      );
    }
  }, [basket]);

  const addDishToBasket = async (dish, quantity) => {
    //Get existing basket or create the new one
    const theBasket = basket || (await createNewBasket());

    //Create the basketDish item and save to dataStore
    const newDish = await DataStore.save(
      new BasketDish({ quantity, Dish: dish, basketID: theBasket.id })
    );
    setBasketDishes([...basketDishes, newDish]);
  };

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({ userID: dbUser.id, restaurantID: resturant.id })
    );
    setBasket(newBasket);
    return newBasket;
  };

  return (
    <BasketContext.Provider
      value={{
        addDishToBasket,
        setBasketResturant,
        resturant,
        basket,
        setBasket,
        basketDishes,
        totalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);
