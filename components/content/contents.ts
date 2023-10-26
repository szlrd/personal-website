import { ForwardRefExoticComponent, RefAttributes } from "react";
import BioBlock from "./BioBlock";
import ExperienceBlock from "./ExperienceBlock";
import Form from "./ContactBlock";
import SkillsBlock from "./SkillsBlock";

type ContentType = {
  id: number;
  name: string;
  component: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
};

const contents: ContentType[] = [
  {
    id: 0,
    name: "Bio",
    component: BioBlock,
  },
  {
    id: 1,
    name: "Experience",
    component: ExperienceBlock,
  },
  {
    id: 2,
    name: "Skills",
    component: SkillsBlock,
  },
  {
    id: 3,
    name: "Contact",
    component: Form,
  },
];

export default contents;
