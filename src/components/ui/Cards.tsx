import {
  FadeContainer,
  popUp,
  popUpFromBottomForText,
} from "@/content/FramerMotionVariants";
import { Skill, Social, Stack } from "@/lib/types";
import { showHoverAnimation } from "@/lib/WindowsAnimation";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedDiv from "../FramerMotion/AnimatedDiv";

export default function Cards({
  props,
  display,
}: {
  props: Skill | Stack | Social;
  display: string;
}) {
  const style = display;
  return (
    <AnimatedDiv
      variants={FadeContainer}
      className="!w-full   selection:bg-neutral-300 dark:text-neutral-200 dark:selection:bg-blue-900 dark:selection:text-neutral-400"
    >
      <motion.h2
        variants={popUpFromBottomForText}
        className="mb-4 font-ubuntu text-2xl font-bold sm:text-3xl"
      >
        {props.title}
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        onMouseMove={(e) => showHoverAnimation(e)}
        className={`cards ${style} mt-5 grid gap-6`}
      >
        {props.data.map((item) => {
          return (
            <Link key={item.name} href={item.url} passHref>
              <motion.a
                variants={popUp}
                title={item.name + " - " + item.description}
                rel="noopener noreferrer"
                target="_blank"
                className="card relative flex h-28  flex-col items-center justify-center gap-3 rounded-md border border-transparent bg-neutral-100 p-8 text-neutral-900  shadow  transition-all hover:z-10 hover:origin-center hover:border-neutral-400 hover:text-neutral-1000 hover:shadow-lg active:!scale-90 dark:bg-neutral-1000 dark:text-neutral-200 dark:shadow-md dark:hover:border-neutral-600 dark:hover:text-neutral-100 lg:hover:!scale-125"
              >
                <div className="card-content flex flex-col items-center justify-center">
                  <item.Icon className="h-10 w-10" />

                  <p className="absolute bottom-3 select-none text-sm">
                    {item.name}
                  </p>
                </div>
              </motion.a>
            </Link>
          );
        })}
      </motion.div>
    </AnimatedDiv>
  );
}
