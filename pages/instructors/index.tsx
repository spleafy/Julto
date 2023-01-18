import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "phosphor-react";
// Components
import Section from "../../components/layout/Section";
// Json
import coaches from "../../public/static/coaches.json";

export default function Instructors() {
  return (
    <>
      <Head>
        <title>Фитнес Жълто | Инструктори</title>
        <meta name="description" content="Инструктори на фитнес Жълто" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section className="bg-white">
        <h1 className="!text-5xl md:!text-6xl text-base !font-semibold mb-10 self-center">
          Инструктори
        </h1>
        <p className="!text-xl text-base mb-10 self-center"></p>
        {coaches.map(
          (
            coach: {
              name: string;
              photo: string;
              speciality: string;
              phone: string;
              url: string;
            },
            index
          ) => (
            <Link
              key={index}
              className="bg-base rounded-2xl flex flex-col md:flex-row w-full gap-8 md:gap-16 mb-12 "
              href={coach.url}
            >
              <Image
                src={coach.photo}
                alt={coach.name}
                width={320}
                height={320}
                className="aspect-square object-cover rounded-2xl w-full md:w-80"
              />
              <div className="flex flex-col gap-10 pb-10 md:pb-14 px-5 pt-0 md:py-14 md:justify-start md:items-start justify-center items-center">
                <h1 className="text-primary font-bold text-2xl md:text-4xl text-center">
                  {coach.name}
                </h1>
                <p className="text-white opacity-70 text-xl md:text-2xl max-w-[80%] text-center md:text-start">
                  {coach.speciality}
                </p>
                <Link
                  className="flex items-center gap-5 text-white"
                  href={`tel:${coach.phone}`}
                >
                  <Phone size={32} />
                  <span className="text-xl md:text-3xl text-white">
                    {coach.phone}
                  </span>
                </Link>
              </div>
            </Link>
          )
        )}
      </Section>
    </>
  );
}
