import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
// Components
import Section from "../components/layout/Section";
// Json
import coaches from "../public/static/coaches.json";
import equipment from "../public/static/equipment.json";

export default function Home() {
  const [index, setIndex] = useState(0);

  const mod = (n: number, m: number) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const images = [
    { id: "1", src: "/static/images/entrance.png" },
    { id: "2", src: "/static/images/dumbells_3.jpg" },
    { id: "4", src: "/static/images/equipment_2.jpg" },
    { id: "6", src: "/static/images/protein_bar.jpg" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % images.length);
    }, 3000);
  }, [index, images.length]);

  const offers = [
    {
      name: "Оборудване",
      photo: "/static/images/dumbells_3.jpg",
      link: "/equipment",
    },
    {
      name: "Виртуална Разходка",
      photo: "/static/images/entrance.png",
      link: "/virtual_walk",
    },
    {
      name: "Персонални Треньори",
      photo: "/static/images/nikolai_kalchev.jpg",
      link: "#instructors",
    },
    {
      name: "Масажи",
      photo: "/static/images/massage_2.jpg",
      link: "/massages",
    },
    { name: "Кикбокс", photo: "/static/images/kickbox.jpg", link: "/kickbox" },
    {
      name: "Протеин",
      photo: "/static/images/protein_bar.jpg",
      link: "/protein",
    },
  ];

  return (
    <>
      <Head>
        <title>Фитнес Жълто | Начало</title>
        <meta name="description" content="Фитнес Жълто" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <Section id="landing">
          <div className="relative w-full h-[450px] md:h-[700px]">
            {images.map((item, i) => {
              const indexLeft = mod(index - 1, images.length);
              const indexRight = mod(index + 1, images.length);

              let className = "";

              if (i === index) {
                className =
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-11/12 h-full z-10 transition-all duration-700";
              } else if (i === indexRight) {
                className =
                  "absolute top-1/2 origin-left right-0 md:-right-[10%] translate-x-full -translate-y-1/2 flex w-3/4 h-3/4 opacity-80 transition-all duration-700";
              } else if (i === indexLeft) {
                className =
                  "absolute top-1/2 origin-right left-0 md:-left-[10%] -translate-x-full -translate-y-1/2 flex w-3/4 h-3/4 opacity-80 transition-all duration-700";
              } else className = "hidden absolute transition-all duration-700";

              return (
                <div className={className} key={item.id}>
                  <Image
                    src={item.src}
                    alt={item.id}
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              );
            })}
          </div>
        </Section>
        <Section className="items-center  bg-white" id="offer">
          <div className="flex flex-wrap justify-center gap-8">
            {offers.map(
              (offer: { name: string; photo: string; link: string }, index) => (
                <Link
                  className="flex flex-col pb-12 md:pb-20 bg-base rounded-2xl drop-shadow-md basis-3/12 hover:scale-105 transition-all"
                  key={index}
                  href={offer.link}
                >
                  <div className="flex relative h-[290px] md:h-[350px] aspect-square">
                    <Image
                      src={offer.photo}
                      alt={offer.name}
                      className="object-cover rounded-2xl"
                      fill
                    />
                  </div>
                  <span className="text-primary text-2xl md:text-4xl font-semibold mt-10 text-center px-5">
                    {offer.name}
                  </span>
                </Link>
              )
            )}
          </div>
        </Section>

        <Section id="instructors">
          <h1 className="md:!text-6xl !text-5xl text-base !font-semibold mb-10 text-center md:!text-end">
            Персонални треньори
          </h1>

          <div className="flex flex-wrap justify-center gap-8">
            {coaches.map((coach: { name: string; photo: string }, index) => (
              <Link
                className="flex flex-col pb-12 md:pb-20 bg-base rounded-2xl drop-shadow-md basis-3/12 hover:scale-105 transition-all"
                key={index}
                href="/instructors"
              >
                <div className="flex relative h-[290px] md:h-[350px] aspect-square">
                  <Image
                    src={coach.photo}
                    alt={coach.name}
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>
                <span className="text-white text-2xl md:text-4xl font-semibold mt-10 text-center self-center px-5 max-w-[350px]">
                  {coach.name}
                </span>
              </Link>
            ))}
          </div>
        </Section>

        <Section className="bg-white items-center" id="location">
          <h1 className="md:!text-6xl !text-5xl text-base !font-semibold mb-10 self-start">
            Локация
          </h1>
          <p className="!text-xl text-base mb-10 self-start">
            Локация на фитнесът
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.4692808523123!2d27.933015617443843!3d43.2206197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4543e0785316d%3A0x912d821bd9802f77!2sFitness%20Yellow!5e0!3m2!1sen!2sbg!4v1671728685328!5m2!1sen!2sbg"
            height="450"
            loading="lazy"
            className="border-none w-full grow"
          ></iframe>
        </Section>
      </main>
    </>
  );
}
