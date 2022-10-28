import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import SkillSection from "@components/SkillSection";
import { getPinnedSkills } from "@/lib/dataFetch";
import { Skill } from "@/lib/types/index";

const Home: NextPage<{
  skills: Skill[];
}> = ({ skills }) => {
  return (
    <>
      <Head>
        <title>CDi</title>
        <meta name="description" content="CDi web developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pageTop">
        <SkillSection props={skills} />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const skills: Skill[] = getPinnedSkills();
  return {
    props: { skills },
  };
};
