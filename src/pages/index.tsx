import Cards from "@/components/ui/Cards";
import skills from "@/content/skillsData";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const skillsData = skills;
  return (
    <>
      <Head>
        <title>CDi</title>
        <meta name="description" content="CDi web developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pageTop">
        {/* Skills */}
        <Cards props={skillsData} />
      </main>
    </>
  );
};

export default Home;
