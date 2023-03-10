import Head from "next/head";
// Components
import Section from "../../components/layout/Section";

export default function Schedule() {
  return (
    <>
      <Head>
        <title>Фитнес Жълто | График</title>
        <meta name="description" content="График на фитнес Жълто" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section className="items-center bg-white">
        <h1 className="!text-5xl md:!text-6xl text-base !font-semibold mb-10 self-center">
          Работно време
        </h1>

        <div className="flex flex-col lg:flex-row gap-16 w-full lg:w-fit bg-base p-10 rounded-2xl">
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white transition-all">
              Понеделник
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white transition-all opacity-70">
              6:00 - 22:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white transition-all">
              Вторник
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white transition-all opacity-70">
              6:00 - 22:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white transition-all">
              Сряда
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white transition-all opacity-70">
              6:00 - 22:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white transition-all">
              Четвъртък
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white transition-all opacity-70">
              6:00 - 22:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white transition-all">
              Петък
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white transition-all opacity-70">
              6:00 - 22:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white transition-all">
              Събота
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white transition-all opacity-70">
              9:00 - 20:00
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <span className="font-bold text-2xl sm:text-xl text-white transition-all">
              Неделя
            </span>
            <span className="font-bold text-2xl sm:text-xl text-white transition-all opacity-70">
              9:00 - 20:00
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
