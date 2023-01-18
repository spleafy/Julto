import Image from "next/image";
// Components
import Section from "../../components/layout/Section";

const Kickbox = () => {
  return (
    <Section className="bg-white">
      <h1 className="!text-5xl md:!text-6xl text-base !font-semibold mb-10 self-center">
        Кикбокс
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-40 mb-10">
        <Image
          src="/static/images/kickbox.jpg"
          alt="Kickbox"
          width={460}
          height={460}
          className="aspect-square rounded-2xl object-cover"
        />
        <p className="!text-xl text-base text-center md:text-start">
          Индивидуални тренировки по кикбокс за начинаещи и напреднали, от 6 до
          60 години. Освен усвояване на техниката, в тренировките са включени и
          много упражнения за сила и издръжливост.
        </p>
      </div>
    </Section>
  );
};

export default Kickbox;
