import { PropsWithChildren } from "react";
import Container from "./Container";
import contents from "./content/contents";

type MenuType = {
  onMenuClick: (id: number) => void;
};

const Menu = ({ children, onMenuClick }: PropsWithChildren<MenuType>) => {
  return (
    <div className="bg-blue-violet-900 fixed w-full z-20">
      <Container>
        <div className="flex justify-end gap-6 py-3 pr-6 font-semibold">
          {contents.map((content) => (
            <div
              className="hover:font-bold hover:cursor-pointer"
              key={content.id}
              onClick={() => onMenuClick(content.id)}
            >
              {content.name}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Menu;
