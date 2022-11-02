import {
  FadeContainer,
  popUp,
  popUpFromBottomForText,
} from "@/content/FramerMotionVariants";
import { Skill, Stack } from "@/lib/types";
import { showHoverAnimation } from "@/lib/WindowsAnimation";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedDiv from "../FramerMotion/AnimatedDiv";

export default function Cards({ props }: { props: Skill | Stack }) {
  return (
    <AnimatedDiv
      variants={FadeContainer}
      className="!w-full   selection:bg-blue-300 dark:text-neutral-200 dark:selection:bg-blue-900 dark:selection:text-gray-400"
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
        className="cards mt-5 grid grid-cols-3 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        {props.data.map((item) => {
          return (
            <Link key={item.name} href={item.url} passHref>
              <motion.a
                variants={popUp}
                title={item.name + " - " + item.description}
                rel="noopener noreferrer"
                target="_blank"
                className="card relative flex h-28  flex-col items-center justify-center gap-3 rounded-md border border-transparent bg-white p-8 text-gray-700  shadow  transition-all hover:z-10 hover:origin-center hover:border-gray-400 hover:text-black hover:shadow-lg active:!scale-90 dark:bg-darkSecondary dark:text-gray-300/80 dark:shadow-md dark:hover:border-neutral-600 dark:hover:text-white lg:hover:!scale-125"
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
