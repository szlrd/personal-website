import { PropsWithChildren } from "react";

const menuItems = ["Bio", "Experience", "Contact"];

const Menu = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-end gap-6 py-3 pr-6 text-blue-violet-500">
      {menuItems.map((menuItem) => (
        <div key={menuItem}>{menuItem}</div>
      ))}
    </div>
  );
};

export default Menu;
