import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BasketContext } from "../contexts/BasketContext";

export const useAuthContext = () => useContext(AuthContext);

export const useBasketContext = () => useContext(BasketContext);
