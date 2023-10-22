import { PropsWithChildren } from "react";
import Container from "./Container";

const menuItems = ["Bio", "Experience", "Skills", "Contact"];

const Menu = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-blue-violet-900">
      <Container>
        <div className="flex justify-end gap-6 py-3 pr-6 font-semibold">
          {menuItems.map((menuItem) => (
            <div
              className="hover:font-bold hover:cursor-pointer"
              key={menuItem}
            >
              {menuItem}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Menu;
