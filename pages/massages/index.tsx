import Image from "next/image";
// Components
import Section from "../../components/layout/Section";

const Massages = () => {
  return (
    <Section className="bg-white">
      <h1 className="!text-5xl md:!text-6xl text-base !font-semibold mb-10 self-center">
        Масажи
      </h1>
      <p className="text-xl text-base mb-10 text-center md:max-w-[60%]">
        Мариана Пъргавелова, масажист-терапевт. Видове: Класически, Спортен,
        Лечебен, Антицелулитен, Релаксиращ  
      </p>
      <Image
        src="/static/images/massage_2.jpg"
        alt="Massage"
        width={460}
        height={460}
        className="aspect-square rounded-2xl object-cover mb-10"
      />
      <h1 className="text-base text-3xl !font-semibold">
        30,00 лв. - 50,00 лв.
      </h1>
    </Section>
  );
};

export default Massages;
