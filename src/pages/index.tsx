import Cards from "@/components/ui/Cards";
import skills from "@/content/skillsData";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const skillsData = skills;
  const itemsNumber =
    "grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5";

  return (
    <>
      <Head>
        <title>CDi</title>
        <meta name="description" content="CDi web developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pageTop">
        {/* Skills */}
        <Cards props={skillsData} display={itemsNumber} />
      </main>
    </>
  );
};

export default Home;
