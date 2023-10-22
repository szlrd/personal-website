import BioBlock from "../components/BioBlock";
import Container from "../components/Container";
import ExperienceBlock from "../components/ExperienceBlock";
import Form from "../components/Form";
import Menu from "../components/Menu";
import SkillsBlock from "../components/SkillsBlock";

const Home = () => {
  return (
    <>
      <Menu />
      <Container>
        <div className="flex flex-col pb-24 divide-blue-violet-900 divide-y">
          <BioBlock />
          <ExperienceBlock />
          <SkillsBlock />
          <Form />
        </div>
      </Container>
    </>
  );
};

export default Home;
