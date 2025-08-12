import { formatQuantity } from "../Helpers"
import type { MenuItem, OrderITem } from "../types"


type OrdertypeContent = { 
    order: OrderITem[],
    removeItem: (id : MenuItem['id'] ) => void
}


export const OrderContents = ({order, removeItem} : OrdertypeContent ) => {
  return (


    <div>
        
        <h1 className="font-black text-4xl text-center "  > Consumos </h1>
            <div className="space-y-3 mt-5 text-center">
                {
                  order.map( orders => 
                        <div className="flex justify-between items-center border-t border-gray-400 p-5 last-of-type:border-b"  key={orders.id}>
                                <p>  {orders.name} - {formatQuantity(orders.price)} </p>
                            <div className="flex justify-between w-auto h-auto p-3 items-center" >
                            <p className="font-black p-2"> Cantidad {orders.quantity} - {formatQuantity(orders.price * orders.quantity)} </p>
                            <button onClick={ () => removeItem(orders.id) } className="bg-red-600 rounded-full h-8 w-8 text-white font-black"> X </button>
                            </div>
                          
                        </div>
                     )
                }
            </div>
        </div>
  )
}
