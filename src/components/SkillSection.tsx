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
  SiAdobephotoshop,
} from "react-icons/si";
import { IconType } from "react-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeContainer, popUp } from "@/content/FramerMotionVariants";
import * as WindowsAnimation from "@lib/WindowsAnimation";

export default function SkillSection({ props }: { props: Skill[] }) {
  return (
    <section className="font-opensans">
      <h2 className="my-2 mb-8 w-full text-left font-ubuntu text-3xl font-bold">
        Skills & tools
      </h2>
      <p className="my-2 mb-8 w-full text-left font-opensans text-lg font-bold">
        The skills, tools and technologies I use to bring products to life:
      </p>
      <div className="!w-full  font-medium selection:bg-blue-300 dark:text-neutral-200 dark:selection:bg-blue-900 dark:selection:text-gray-400">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="mt-5 grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5 "
        >
          {props.map((skill: Skill, index: number) => {
            const Icon = chooseIcon(skill.title.toLowerCase());
            return (
              <Link key={index} href={skill.url}>
                <motion.a
                  href={skill.url}
                  variants={popUp}
                  title={skill.title}
                  onMouseMove={(element) =>
                    WindowsAnimation.showHoverAnimation(element)
                  }
                  onMouseLeave={(element) =>
                    WindowsAnimation.removeHoverAnimation(element)
                  }
                  className="card dark:card relative flex flex-col items-center justify-center gap-3 rounded-md border border-transparent bg-white p-8 text-gray-700  shadow  transition-all hover:z-10 hover:origin-center hover:border-gray-400 hover:text-black hover:shadow-lg active:!scale-90 dark:bg-darkSecondary dark:text-gray-300/80 dark:shadow-md dark:hover:border-neutral-600 dark:hover:text-white lg:hover:!scale-125"
                >
                  <Icon className="h-8 w-8" />

                  <p className="absolute bottom-3 select-none text-[10px]">
                    {skill.title}
                  </p>
                </motion.a>
              </Link>
            );
          })}
        </motion.div>
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
    case "adobe photoshop":
      Icon = SiAdobephotoshop;
      break;
    default:
      break;
  }
  return Icon;
}
