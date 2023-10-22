import ContentContainer from "./ContentContainer";

type SkillType = {
  name: string;
  score: number;
};

type SkillBlockType = {
  name: string;
  skills: SkillType[];
};

const skillBlocks: SkillBlockType[] = [
  {
    name: "Code Languages",
    skills: [
      {
        name: "JavaScript",
        score: 75,
      },
      {
        name: "TypeScript",
        score: 60,
      },
      {
        name: "Java",
        score: 75,
      },
      {
        name: "Python",
        score: 40,
      },
    ],
  },
  {
    name: "Frameworks and Libraries",
    skills: [
      {
        name: "React",
        score: 80,
      },
      {
        name: "Vue.js",
        score: 50,
      },
      {
        name: "Spring",
        score: 70,
      },
      {
        name: "Next.js",
        score: 70,
      },
    ],
  },
  {
    name: "Tools",
    skills: [
      {
        name: "Git",
        score: 70,
      },
      {
        name: "macOS",
        score: 80,
      },
      {
        name: "Docker",
        score: 60,
      },
      {
        name: "AWS",
        score: 40,
      },
      {
        name: "Maven",
        score: 60,
      },
    ],
  },
  {
    name: "Language skills",
    skills: [
      {
        name: "Hungarian",
        score: 100,
      },
      {
        name: "English",
        score: 85,
      },
    ],
  },
];

const SkillBlock = ({ skillBlock }: { skillBlock: SkillBlockType }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3>{skillBlock.name}</h3>
      {skillBlock.skills.map((skill, index) => (
        <SkillBar key={index} skill={skill} />
      ))}
    </div>
  );
};

const SkillBar = ({ skill }: { skill: SkillType }) => {
  return (
    <div className="h-8 bg-blue-violet-200 rounded-md overflow-hidden shadow-lg hover:bg-blue-violet-300">
      <div
        className={`bg-blue-violet-800 hover:bg-blue-violet-900 h-full flex items-center`}
        style={{ width: `${skill.score}%` }}
      >
        <div className="ml-4">{skill.name}</div>
      </div>
    </div>
  );
};

const SkillsBlock = () => {
  return (
    <ContentContainer>
      <h2>Skills</h2>
      <div className="flex flex-col gap-6">
        {skillBlocks.map((skillBlock, index) => (
          <SkillBlock key={index} skillBlock={skillBlock} />
        ))}
      </div>
    </ContentContainer>
  );
};

export default SkillsBlock;
