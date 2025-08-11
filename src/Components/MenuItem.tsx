import type { MenuItem as MenuItemType } from "../types";

type MenuItemPops = {
  item: MenuItemType;
};

export const MenuItem = ({ item }: MenuItemPops) => {
  return (
    <     button
      className="border-2 border-teal-400 hover:bg-teal-400  w-full p-3 flex justify-between "
     
     > 
     
     
     <p> {item.name} </p>
     <p className="font-black"> ${item.price} </p>
     </button>
 
  );
};
