import { useState } from "react";
import type { OrderITem } from "../../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderITem[]>([]);

  const addItem = () => {
    console.log("agregando...");
  };

  return {
    addItem,
  };
};
