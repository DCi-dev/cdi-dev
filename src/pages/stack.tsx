import stack from "@/content/stackData";

import Cards from "@/components/ui/Cards";

export default function Stack() {
  const stackData = stack;
  return (
    <>
      <section className="pageTop font-opensans">
        <div className="mb-10 flex w-full select-none flex-col gap-3 py-5">
          <h1 className="mb-6 font-ubuntu text-4xl font-bold  text-neutral-900 dark:text-neutral-200 md:text-5xl lg:text-6xl">
            Stack
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
            {stackData.map((item, index) => {
              return <Cards key={index} props={item} />;
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
