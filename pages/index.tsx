import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Components
import Section from "../components/layout/Section";

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
      link: "#equipment",
    },
    {
      name: "Виртуална Разходка",
      photo: "/static/images/entrance.png",
      link: "#virtual_walk",
    },
    {
      name: "Персонални Треньори",
      photo: "/static/images/nikolai_kalchev.jpg",
      link: "#instructors",
    },
    {
      name: "Масажи",
      photo: "/static/images/massage_2.jpg",
      link: "#massages",
    },
    { name: "Кикбокс", photo: "/static/images/kickbox.jpg", link: "#features" },
    {
      name: "Протеин",
      photo: "/static/images/protein_bar.jpg",
      link: "#features",
    },
  ];

  const equipment = [
    "/static/images/equipment.jpg",
    "/static/images/bars_3.jpg",
    "/static/images/bars_4.jpg",
    "/static/images/dumbells_3.jpg",
    "/static/images/dumbells_2.jpg",
    "/static/images/equipment_3.jpg",
    "/static/images/benchpress.jpg",
    "/static/images/equipment_2.jpg",
  ];

  const coaches = [
    {
      name: "Николай Калчев",
      photo: "/static/images/nikolai_kalchev.jpg",
    },
    {
      name: "Мариана Пъргавелова",
      photo: "/static/images/mariana_pargavelova.jpg",
    },
    { name: "Жулиян Желев", photo: "/static/images/juliqn_jelev.jpg" },
    {
      name: "Надя Матай",
      photo: "/static/images/nadq_matai.jpg",
    },

    {
      name: "Олег Давиденко",
      photo: "/static/images/oleg_davidenko.jpg",
    },
    {
      name: "Росен Михов",
      photo: "/static/images/rosen_mihov.jpg",
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
        <Section className="bg-primary" id="equipment">
          <h1 className="md:text-6xl text-5xl !font-semibold mb-10">
            Оборудване
          </h1>
          <p className="!text-xl text-base mb-10 md:max-w-[80%] text-center">
            Кардио уреди – 12 броя (пътеки, велоергометри, кростренажори, гребен
            тренажор) Свободни тежести – уважаваме упражненията със свободни
            тежести и затова подходихме сериозно към тази част: – специални
            лостове до 600кг на лежанките, клека и подиума за тяга - достатъчно
            дискове за всички уреди едновременно - дъмбели от 2,5 до 50кг – два
            комплекта - щанги с фиксирана тежест от 10 до 50кг – два комплекта
            Машини – подбрахме внимателно едни от най-сполучливите машини за
            гръб, гърди, рамо, бицепс, предно бедро, задно бедро и др. Свободно
            пространство – най-ценната част в една зала – тук можеш на
            спокойствие да загряваш, да разтягаш, да изпълняваш упражнения със
            свободни тежести, да играеш кик бокс.
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
        <Section className="bg-base items-center" id="virtual_walk">
          <h1 className="text-primary md:text-6xl text-5xl !font-semibold mb-10 text-center">
            Виртуална разходка
          </h1>
          <video
            src="/static/videos/virtual_walk.mp4"
            className="aspect-square h-[550px]"
            controls
          ></video>
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
                <div className="flex relative h-[290px] md:h-[370px] aspect-square">
                  <Image
                    src={coach.photo}
                    alt={coach.name}
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>
                <span className="text-white text-2xl md:text-4xl font-semibold mt-10 text-center self-center px-5 max-w-[370px]">
                  {coach.name}
                </span>
              </Link>
            ))}
          </div>
        </Section>
        <Section className="bg-base items-center" id="massages">
          <h1 className="text-primary md:text-6xl text-5xl !font-semibold mb-10">
            Масажи
          </h1>
          <p className="text-xl text-white mb-10 text-center md:max-w-[60%]">
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
          <h1 className="text-primary Phone !font-semibold">
            30,00 лв. - 50,00 лв.
          </h1>
        </Section>
        <Section className="bg-primary" id="features">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-40 mb-10">
            <div className="flex flex-col">
              <h1 className="md:!text-6xl !text-5xl text-base !font-semibold mb-10 text-center md:text-start">
                Кикбокс
              </h1>
              <p className="!text-xl text-base text-center md:text-start">
                Индивидуални тренировки по кикбокс за начинаещи и напреднали, от
                6 до 60 години. Освен усвояване на техниката, в тренировките са
                включени и много упражнения за сила и издръжливост.
              </p>
            </div>
            <Image
              src="/static/images/kickbox.jpg"
              alt="Kickbox"
              width={460}
              height={460}
              className="aspect-square rounded-2xl object-cover"
            />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-40 mb-10">
            <div className="flex flex-col">
              <h1 className="md:!text-6xl !text-5xl text-base !font-semibold mb-10 text-center md:text-end">
                Добавки
              </h1>
              <p className="!text-xl text-base text-center md:text-end">
                Освен ароматно кафе и минерална вода, тук ще намерите
                най-популярните добавки, които могат да ви помогнат да направите
                вашата тренировка още по-ефективна. И разкошен протеинов шейк
                след тренировка като награда за добре свършената работа.
              </p>
            </div>
            <Image
              src="/static/images/protein_bar.jpg"
              alt="Protein"
              width={460}
              height={460}
              className="aspect-square rounded-2xl object-cover"
            />
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
