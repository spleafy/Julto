import Image from "next/image";
// Components
import Section from "../../components/layout/Section";
// Json
import equipment from "../../public/static/equipment.json";

const Equipment = () => {
  return (
    <Section className="bg-white">
      <h1 className="!text-5xl md:!text-6xl text-base !font-semibold mb-10 self-center">
        Оборудване
      </h1>
      <p className="!text-xl text-base mb-10 md:max-w-[80%] text-center">
        Кардио уреди – 12 броя (пътеки, велоергометри, кростренажори, гребен
        тренажор) Свободни тежести – уважаваме упражненията със свободни тежести
        и затова подходихме сериозно към тази част: – специални лостове до 600кг
        на лежанките, клека и подиума за тяга - достатъчно дискове за всички
        уреди едновременно - дъмбели от 2,5 до 50кг – два комплекта - щанги с
        фиксирана тежест от 10 до 50кг – два комплекта Машини – подбрахме
        внимателно едни от най-сполучливите машини за гръб, гърди, рамо, бицепс,
        предно бедро, задно бедро и др. Свободно пространство – най-ценната част
        в една зала – тук можеш на спокойствие да загряваш, да разтягаш, да
        изпълняваш упражнения със свободни тежести, да играеш кик бокс.
      </p>
      <div className="flex flex-wrap w-full gap-10">
        {equipment.map((src: string, index) => (
          <div
            className="flex relative grow w-[90%] basis-[100%] md:basis-[20%] aspect-square"
            key={index}
          >
            <Image
              src={src}
              alt={src}
              className="object-cover rounded-2xl"
              fill
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Equipment;
