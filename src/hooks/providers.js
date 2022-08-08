import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BasketContext } from "../contexts/BasketContext";
import { OrderContext } from "../contexts/OrderContext";

export const useAuthContext = () => useContext(AuthContext);

export const useBasketContext = () => useContext(BasketContext);

export const useOrderContext = () => useContext(OrderContext);
