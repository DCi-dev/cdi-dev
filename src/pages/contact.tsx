import ContactForm from "@/components/ContactForm";
import AnimatedDiv from "@/components/FramerMotion/AnimatedDiv";
import { popUpFromBottomForText } from "@/content/FramerMotionVariants";

export default function Contact() {
  return (
    <div className="pageTop">
      <div id="contact" className="!relative dark:bg-darkPrimary">
        {/* Get in touch top section */}
        <section className="w-full-width pt-6 text-center dark:bg-darkPrimary dark:text-white">
          <AnimatedDiv
            variants={popUpFromBottomForText}
            className="text-4xl font-bold"
          >
            Get in touch
          </AnimatedDiv>

          <AnimatedDiv
            variants={popUpFromBottomForText}
            className="px-4 py-2 font-medium text-slate-400"
          >
            Please feel free to get in touch anytime, whether for work or to say
            Hi 🙋‍♂️.
          </AnimatedDiv>
        </section>

        {/* Wrapper Container */}
        <section className="mx-auto flex w-full flex-col px-5 dark:bg-darkPrimary dark:text-white lg:flex-row lg:pb-10">
          {/* Left Contact form section */}
          <div className="mx-auto mt-10 w-full">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
