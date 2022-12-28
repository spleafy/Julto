import Head from "next/head";
import Image from "next/image";
import { Phone } from "phosphor-react";
// Components
import Section from "../../components/layout/Section";

export default function Home() {
  const coaches = [
    {
      name: "Жулиян Желев",
      photo: "/static/images/juliqn_jelev.jpg",
      speciality: "Кикбокс",
      phone: "0888 962 105",
    },
    {
      name: "Мариана Пъргавелова",
      photo: "/static/images/mariana_pargavelova.jpg",
      speciality: "Фитнес, хранителни и тренировъчни програми",
      phone: "0893 063 892",
    },
    {
      name: "Надя Матай",
      photo: "/static/images/nadq_matai.jpg",
      speciality: "Фитнес",
      phone: "0896 740 248",
    },
    {
      name: "Николай Калчев",
      photo: "/static/images/nikolai_kalchev.jpg",
      speciality:
        "Фитнес, бодибилдинг, кондиционни тренировки, консултации хранене",
      phone: "0887 200 104",
    },
    {
      name: "Олег Давиденко",
      photo: "/static/images/oleg_davidenko.jpg",
      speciality:
        "Фитнес, маратон, плуване, хранителни и тренировъчни програми",
      phone: "0897 843 606",
    },
    {
      name: "Росен Михов",
      photo: "/static/images/rosen_mihov.jpg",
      speciality: "Фитнес, бодибилдинг, хранителни и тренировъчни програми",
      phone: "0883 353 631",
    },
  ];

  return (
    <>
      <Head>
        <title>Фитнес Жълто | Инструктори</title>
        <meta name="description" content="Инструктори на фитнес Жълто" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <h1 className="text-5xl md:text-6xl text-base !font-semibold mb-10 self-center">
          Инструктори
        </h1>
        <p className="!text-xl text-base mb-10 self-center">
          Инструктори на фитнес Жълто
        </p>
        {coaches.map(
          (
            coach: {
              name: string;
              photo: string;
              speciality: string;
              phone: string;
            },
            index
          ) => (
            <div
              key={index}
              className="bg-base rounded-2xl flex flex-col md:flex-row w-full gap-16 mb-12"
            >
              <Image
                src={coach.photo}
                alt={coach.name}
                width={320}
                height={320}
                className="aspect-square object-cover rounded-2xl w-full md:w-80"
              />
              <div className="flex flex-col gap-10 pb-14 pt-0 md:py-14 md:justify-start md:items-start justify-center items-center">
                <h1 className="text-white font-bold text-4xl text-center">
                  {coach.name}
                </h1>
                <p className="text-white opacity-70 text-2xl max-w-[80%] text-center md:text-start">
                  {coach.speciality}
                </p>
                <div className="flex items-center gap-5 text-white">
                  <Phone size={32} />
                  <span className="text-3xl text-white">{coach.phone}</span>
                </div>
              </div>
            </div>
          )
        )}
      </Section>
    </>
  );
}
