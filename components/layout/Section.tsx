import { FC, ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  children: ReactNode | any;
  style?: any;
  className?: string;
  id?: string;
}

const Section: FC<SectionProps> = ({ children, id, style, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={`flex justify-center px-10 md:px-36 py-20 transition-all ${
        className ? className : ""
      }`}
      id={id ? id : ""}
    >
      <motion.div
        className="flex flex-col items-center max-w-[1440px] w-full"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          ...style,
        }}
        ref={ref}
      >
        {typeof children === "function" ? children(isInView) : children}
      </motion.div>
    </section>
  );
};

export default Section;
