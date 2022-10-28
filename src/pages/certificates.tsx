import certificatesData from "@content/certificatesData";
import { popUpFromBottomForText } from "@content/FramerMotionVariants";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Certificate = {
  title: string;
  issuedDate: string;
  issuedBy: {
    name: string;
    logo: string;
  };
  url: string;
  pinned: boolean;
};

export default function Certificates() {
  return (
    <>
      <section className="pageTop font-opensans">
        <div className="mb-10 flex w-full select-none flex-col gap-3 py-5">
          <h2 className="font-ubuntu  text-4xl font-bold text-neutral-900 dark:text-neutral-200 md:text-5xl">
            Certificates
          </h2>
        </div>

        <div className="flex flex-col gap-8 px-5 font-opensans">
          {certificatesData.map((cer: Certificate, index: number) => {
            return (
              <AnimatedDiv
                className="flex flex-col gap-6 rounded-lg bg-white p-3 shadow  dark:bg-darkSecondary/50 md:flex-row md:items-center md:justify-between md:gap-4"
                key={index}
                variants={popUpFromBottomForText}
              >
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center justify-center">
                    <Image
                      width={50}
                      height={50}
                      src={cer.issuedBy.logo}
                      alt={cer.issuedBy.name}
                      quality={60}
                      objectFit="contain"
                      layout="fixed"
                      placeholder="blur"
                      blurDataURL={cer.issuedBy.logo}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="sm:text-md mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-200 md:text-xl">
                      {cer.title}
                    </h3>
                    <p className="text-md text-gray-500">{cer.issuedBy.name}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6 text-sm">
                  <p className="text-md text-gray-500">{cer.issuedDate}</p>
                  <Link href={cer.url} passHref>
                    <motion.a
                      href={cer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform rounded-md bg-neutral-200 px-4 py-1 text-lg font-bold shadow duration-200 active:scale-90 dark:bg-black  dark:text-white lg:hover:bg-black lg:hover:text-white dark:lg:hover:bg-white dark:lg:hover:text-black"
                    >
                      View
                    </motion.a>
                  </Link>
                </div>
              </AnimatedDiv>
            );
          })}
        </div>
      </section>
    </>
  );
}
