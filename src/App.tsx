import { useOrder } from "./Components/Hooks/useOrder";
import { MenuItem } from "./Components/MenuItem";
import { OrderContents } from "./Components/OrderContents";
import { OrderTotal } from "./Components/OrderTotal";
import { TipPercentageForm } from "./Components/TipPercentageForm";
import { menuItems } from "./data/db";

function App() {


  const {order, addItem, removeItem, tip, setTip,placeOrder} = useOrder()



  return (
    <>
      <header className="bg-amber-400  py-4  ">
        <h1 className="text-center  text-4xl font-black ">
          Calculadora de propinas y consumos
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto mt-20 grid md:grid-cols-2 ">
        <div className="p-5">
          <h2 className="text-4l font-black"> Menù </h2>

          <div className="space-y-3 mt-10 ">



            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>

        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

            { order.length > 0 ? ( <>
              <OrderContents order={order} removeItem={removeItem} /> 
              <TipPercentageForm tip={tip} setTip={setTip} />
            <OrderTotal placeOrder={placeOrder} tip={tip} order={order} />
            </>) : (
              <p> La lista esta vacia </p>
            )
              
                }
           
          
        </div>
      </main>
    </>
  );
}

export default App;
