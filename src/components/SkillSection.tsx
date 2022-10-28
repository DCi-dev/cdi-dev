import { Skill } from "@/lib/types/index";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiTailwindcss,
} from "react-icons/si";
import { IconType } from "react-icons";

export default function SkillSection({ props }: { props: Skill[] }) {
  return (
    <section className="mx-5">
      <div className="my-10 grid grid-cols-3 gap-4">
        {props.map((skill: Skill, index: number) => {
          const Icon = chooseIcon(skill.title.toLowerCase());
          return (
            <div
              key={index}
              title={skill.title}
              className="group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 bg-gray-50 p-4 hover:bg-white dark:border-neutral-700 dark:bg-darkPrimary hover:dark:bg-darkSecondary sm:justify-start md:origin-top"
            >
              <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
                <Icon className="h-8 w-8" />
              </div>
              <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
                {skill.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function chooseIcon(title: string) {
  let Icon: IconType = SiHtml5;
  switch (title) {
    case "html":
      Icon = SiHtml5;
      break;
    case "css":
      Icon = SiCss3;
      break;
    case "javascript":
      Icon = SiJavascript;
      break;
    case "typescript":
      Icon = SiTypescript;
      break;
    case "react":
      Icon = SiReact;
      break;
    case "nextjs":
      Icon = SiNextdotjs;
      break;
    case "git":
      Icon = SiGit;
      break;
    case "github":
      Icon = SiGithub;
      break;
    case "figma":
      Icon = SiFigma;
      break;
    case "tailwindcss":
      Icon = SiTailwindcss;
      break;
    default:
      break;
  }
  return Icon;
}
