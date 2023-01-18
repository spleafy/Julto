import Image from "next/image";
// Components
import Section from "../../components/layout/Section";

const Protein = () => {
  return (
    <Section className="bg-white">
      <h1 className="!text-5xl md:!text-6xl text-base !font-semibold mb-10 self-center">
        Протеин
      </h1>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-40 mb-10">
        <p className="!text-xl text-base text-center md:text-end">
          Освен ароматно кафе и минерална вода, тук ще намерите най-популярните
          добавки, които могат да ви помогнат да направите вашата тренировка още
          по-ефективна. И разкошен протеинов шейк след тренировка като награда
          за добре свършената работа.
        </p>
        <Image
          src="/static/images/protein_bar.jpg"
          alt="Protein"
          width={460}
          height={460}
          className="aspect-square rounded-2xl object-cover"
        />
      </div>
    </Section>
  );
};

export default Protein;
