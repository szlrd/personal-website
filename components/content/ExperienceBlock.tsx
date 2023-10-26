import Image from "next/image";
import ContentContainer from "../ContentContainer";
import { forwardRef } from "react";

type ExperienceType = {
  title: string;
  img: string;
  from: string;
  to: string;
  name: string;
  description: string;
};

const experienceList: ExperienceType[] = [
  {
    title: "Full Stack Software Developer",
    img: "/wrd.png",
    from: "2019. 10. 01.",
    to: "2023. 10. 01",
    name: "WRD Labs Zrt.",
    description: "First job.",
  },
  {
    title: "Full Stack Software Developer",
    img: "/wrd.png",
    from: "2019. 10. 01.",
    to: "2023. 10. 01",
    name: "WRD Labs Zrt.",
    description: "First job.",
  },
  {
    title: "Full Stack Software Developer",
    img: "/wrd.png",
    from: "2019. 10. 01.",
    to: "2023. 10. 01",
    name: "WRD Labs Zrt.",
    description: "First job.",
  },
];

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div
      className="group p-8 before:absolute before:w-[50%] before:border-blue-violet-400 relative
        odd:pr-0 even:pl-0
      before:odd:top-[-4px] before:odd:left-0 before:odd:bottom-[-4px] before:odd:border-4 before:odd:border-r-0 before:odd:rounded-l-lg
      before:even:top-0 before:even:right-0 before:even:bottom-0 before:even:border-4 before:even:border-l-0 before:even:rounded-r-lg
      first:before:!border-t-0 first:before:!rounded-t-none last:before:!border-b-0 last:before:!rounded-b-none"
    >
      <div
        className={`overflow-hidden bg-blue-violet-800 rounded flex group-even:flex-row-reverse shadow-lg`}
      >
        <div className="p-4 text-sm flex flex-col group-even:items-end flex-grow">
          <div
            className="font-bold text-l before:absolute before:z-10 before:w-6 before:h-6 before:bg-blue-violet-600 before:rounded-xl
    before:group-odd:left-[-10px] before:group-even:right-[-10px] before:border-4 before:border-blue-violet-200"
          >
            {experience.title}
          </div>
          <div>{experience.name}</div>
          <div>
            {experience.from} - {experience.to}
          </div>
          <div>{experience.description}</div>
        </div>
        <Image src={experience.img} width={128} height={128} alt="Logo" />
      </div>
    </div>
  );
};

const ExperienceBlock = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <ContentContainer ref={ref}>
      <div className="flex flex-col px-64">
        {experienceList.map((experience) => (
          <ExperienceCard experience={experience} key={experience.name} />
        ))}
      </div>
    </ContentContainer>
  );
});

ExperienceBlock.displayName = "Experience";

export default ExperienceBlock;
