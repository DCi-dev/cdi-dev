import utilities from "@/content/utilitiesData";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import { Utility } from "@lib/types/index";
import {
  FadeContainer,
  popUp,
  popUpFromBottomForText,
} from "@/content/FramerMotionVariants";

export default function Utilities() {
  return (
    <>
      <section className="pageTop font-opensans">
        <div className="mb-10 flex w-full select-none flex-col gap-3 py-5">
          <h1 className="mb-6 font-ubuntu text-4xl font-bold  text-neutral-900 dark:text-neutral-200 md:text-5xl lg:text-6xl">
            Utilities
          </h1>
          <p className="text-lg text-gray-400">
            If you are wondering what tech I use, here&apos;s the list of what
            I&apos;m currently working with.
          </p>
          <p className="text-lg text-gray-400">
            Based on the principle of separation of concerns, I prefer to use
            different applications for different purposes.
          </p>
        </div>

        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-14">
            {utilities.map((item, index) => {
              return <UtilitySection key={index} utility={item as Utility} />;
            })}
          </div>
        </div>

        <p className="mt-20 -mb-5">
          Last Update on <span className="font-bold">Oct 29, 2022</span>
        </p>
      </section>
    </>
  );
}

function UtilitySection({ utility }: { utility: Utility }) {
  return (
    <AnimatedDiv
      variants={FadeContainer}
      className="!w-full   selection:bg-blue-300 dark:text-neutral-200 dark:selection:bg-blue-900 dark:selection:text-gray-400"
    >
      <motion.h2
        variants={popUpFromBottomForText}
        className="mb-4 font-ubuntu text-2xl font-bold sm:text-3xl"
      >
        {utility.title}
      </motion.h2>

      <AnimatedDiv
        variants={FadeContainer}
        className="mt-5 grid grid-cols-3 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        {utility.data.map((item) => {
          return (
            <Link href={item.link} key={item.name} passHref>
              <motion.a
                variants={popUp}
                title={item.name + " - " + item.description}
                rel="noopener noreferrer"
                target="_blank"
                className="relative flex flex-col items-center justify-center gap-8 rounded-md border border-transparent bg-white p-12  text-gray-700 shadow transition-all hover:z-10 hover:origin-center hover:border-gray-400 hover:text-black hover:shadow-lg active:!scale-90 dark:bg-darkSecondary dark:text-gray-300/80 dark:shadow-md dark:hover:border-neutral-600 dark:hover:text-white lg:hover:!scale-125"
              >
                <item.Icon className="h-10 w-10" />

                <p className="absolute bottom-3 select-none text-xs">
                  {item.name}
                </p>
              </motion.a>
            </Link>
          );
        })}
      </AnimatedDiv>
    </AnimatedDiv>
  );
}
