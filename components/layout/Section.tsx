import { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  style?: any;
  className?: string;
}

const Section: FC<SectionProps> = ({ children, style, className }) => {
  return (
    <section
      className={`flex justify-center px-10 md:px-36 py-20 transition-all ${
        className ? className : ""
      }`}
      style={style}
    >
      <div className="flex flex-col items-center max-w-[1440px] w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
