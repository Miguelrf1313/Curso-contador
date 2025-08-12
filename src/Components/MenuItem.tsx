import type { MenuItem as Menuitem1 } from "../types/index";

type Menuitems = {
  item: Menuitem1;
  addItem: (item : Menuitem1) => void

};

export const MenuItem = ({ item, addItem} : Menuitems) => {
 
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-400  w-full p-3 flex justify-between" onClick={ () => addItem(item)  }>
      <p> {item.name} </p>
      <p className="font-black"> ${item.price} </p>
    </button>
  );
};
