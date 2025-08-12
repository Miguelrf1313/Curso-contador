import { useMemo } from "react";
import type {  OrderITem } from "../types";
import { formatQuantity } from "../Helpers";


type OderTotalPros = {
  order: OrderITem[];
  tip:number
   placeOrder: () => void
};

export const OrderTotal = ({ order, tip,placeOrder }: OderTotalPros) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo( ( ) => subTotalAmount * tip,[tip,order] )
  const totalAmount = useMemo( () =>subTotalAmount + tipAmount ,[order] )

  return (
    <>
      <div className="space-y-3">
      
        <h2 className="font-black text-2xl">Total y propina </h2>
        <p>
          Subtotal a pagar:
          <span className="font-bold"> {formatQuantity(subTotalAmount)} </span>
        </p>

        <p>
          Propina:
          <span className="font-bold"> {formatQuantity(tipAmount) } </span>
        </p>

        <p>
          Total a pagar:
          <span className="font-bold"> {formatQuantity(totalAmount) } </span>
        </p>
      </div>

      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-15 enabled:cursor-pointer "
      disabled={ totalAmount === 0 }
      onClick={() => placeOrder() }
      >
        Guardar Orden
      </button>
    </>
  );
};
