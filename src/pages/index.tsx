import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import ThemeToggler from "@components/layout/ThemeToggler";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CDi</title>
        <meta name="description" content="CDi web developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mt-28 pt-6">
          <div className="flex flex-col items-center justify-center ">
            <ThemeToggler />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
