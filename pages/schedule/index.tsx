import Head from "next/head";
// Components
import Section from "../../components/layout/Section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Фитнес Жълто | График</title>
        <meta name="description" content="График на фитнес Жълто" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section className="items-center">
        <h1 className="!text-5xl md:!text-6xl text-base !font-semibold mb-10 self-center">
          График
        </h1>
        <p className="!text-xl text-base mb-10 self-center">
          График на фитнес Жълто
        </p>
        <div className="flex flex-col lg:flex-row gap-16 w-full lg:w-fit bg-base p-10 rounded-2xl">
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white">
              Понеделник
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white opacity-70">
              6:00 - 22:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white">
              Вторник
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white opacity-70">
              6:00 - 22:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white">
              Сряда
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white opacity-70">
              6:00 - 22:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white">
              Четвъртък
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white opacity-70">
              6:00 - 22:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white">
              Петък
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white opacity-70">
              6:00 - 22:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white">
              Събота
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white opacity-70">
              9:00 - 20:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white">
              Неделя
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white opacity-70">
              9:00 - 20:00
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
