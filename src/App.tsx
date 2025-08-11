import { MenuItem } from "./Components/MenuItem";
import { menuItems } from "./data/db";

function App() {
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
              <MenuItem key={item.id} item={item} />
            ))}
          </div>

        </div>
        <div className="">
          <h2> Consumos </h2>
        </div>
      </main>
    </>
  );
}

export default App;
