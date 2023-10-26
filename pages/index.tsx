import { useRef } from "react";
import Container from "../components/Container";
import Menu from "../components/Menu";
import contents from "../components/content/contents";

const Home = () => {
  const contentRefs = useRef([]);

  const handleMenuClick = (id: number) => {
    if (!contentRefs.current || !contentRefs.current[id]) {
      return;
    }

    contentRefs.current[id].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Menu onMenuClick={handleMenuClick} />
      <Container>
        <div className="flex flex-col pb-24 divide-blue-violet-900 divide-y">
          {contents.map((content) => (
            <content.component
              key={content.id}
              ref={(el) => (contentRefs.current[content.id] = el)}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
