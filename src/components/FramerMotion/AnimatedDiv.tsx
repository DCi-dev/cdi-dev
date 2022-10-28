import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variants: Variants;
  className: string;
};

export default function AnimatedDiv({ variants, className, children }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className={className}
      transition={{ staggerChildren: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
