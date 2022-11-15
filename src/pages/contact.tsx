import ContactForm from "@/components/ContactForm";
import AnimatedDiv from "@/components/FramerMotion/AnimatedDiv";
import Cards from "@/components/ui/Cards";
import { popUpFromBottomForText } from "@/content/FramerMotionVariants";
import socialLinks from "@/content/socialMedia";
import { NextPage } from "next";

const Contact: NextPage = () => {
  const socials = socialLinks.data.slice(0, 3);
  const socialData = {
    title: "Socials",
    data: socials,
  };
  const itemsNumber = "grid-cols-3 mx-5";

  return (
    <div className="relative mx-auto mt-11 mb-10 max-w-7xl bg-neutral-200 p-4 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200 md:mt-16 ">
      <div id="contact" className="!relative">
        {/* Get in touch top section */}
        <section className="w-full pt-6 text-center dark:text-neutral-100 ">
          <AnimatedDiv
            variants={popUpFromBottomForText}
            className="text-6xl font-bold"
          >
            <h1>Get in touch</h1>
          </AnimatedDiv>

          <AnimatedDiv
            variants={popUpFromBottomForText}
            className="px-4 py-7 text-lg text-neutral-600 dark:text-neutral-300"
          >
            <p>
              Do you have any questions, concerns or just want to say Hi 🙋‍♂️?
            </p>
            <p>Here are the easiest ways to contact me!</p>
          </AnimatedDiv>
          <div className="mx-auto max-w-lg text-center">
            <Cards props={socialData} display={itemsNumber} />
          </div>
        </section>

        <section className="mx-auto w-full px-2 dark:text-neutral-100  lg:pb-10">
          <div className="mx-auto mt-4 w-full px-8">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
