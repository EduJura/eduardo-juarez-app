import { IoLogoStencil } from "react-icons/io5";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiHtml5,
  SiGit,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiCss3,
  SiJest,
  SiDocker,
  SiHcl,
} from "react-icons/si";

function Skills() {
  const skills: Array<any> = [
    {
      iconEl: <SiHtml5 />,
      name: "HTML",
    },
    {
      iconEl: <SiCss3 />,
      name: "CSS",
    },
    {
      iconEl: <SiJavascript />,
      name: "Java Script",
    },
    {
      iconEl: <FaVuejs />,
      name: "Vue JS",
    },
    {
      iconEl: <FaReact />,
      name: "ReactJS",
    },
    {
      iconEl: <IoLogoStencil />,
      name: "Stencil",
    },
    {
      iconEl: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      iconEl: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      iconEl: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      iconEl: <SiJest />,
      name: "Jest",
    },
    {
      iconEl: <FaGithub />,
      name: "Github",
    },
    {
      iconEl: <SiGit />,
      name: "Git",
    },
    {
      iconEl: <SiHcl />,
      name: "HCL",
    },
    {
      iconEl: <FaJava />,
      name: "Java",
    },
    {
      iconEl: <SiMysql />,
      name: "My Sql",
    },
    {
      iconEl: <SiDocker />,
      name: "Docker",
    },
  ];

  return (
    <>
      <h1 className='text-2xl text-gray-900 font-[500] sm:text-6xl'>
        My Skills
      </h1>
      <div className='grid grid-cols-4 gap-4 my-8'>
        {skills.map((skill: any, index: number) => (
          <div
            className='
            text-center
            text-emerald-400            
            dark:bg-slate-600
            rounded-lg shadow-md
            shadow-emerald-400
            p-4 mb-4
            hover:scale-110
            hover:shadow-emerald-500
            hover:text-emerald-500
            duration-300
            cursor-pointer'
            key={index}>
            <div className='text-7xl flex items-center justify-center'>
              {skill.iconEl}
            </div>
            <div className='text-white font-[800] mt-4'>{skill.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
