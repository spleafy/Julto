import Head from "next/head";
// Components
import Section from "../../components/layout/Section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Фитнес Жълто | Ценоразпис</title>
        <meta name="description" content="Ценоразпис на фитнес Жълто" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <h1 className="!text-5xl md:!text-6xl text-base !font-semibold mb-10 self-center">
          Ценоразпис
        </h1>
        <p className="!text-xl text-base mb-10 self-center">
          Ценоразпис на фитнес Жълто
        </p>
        <div className="flex gap-12 flex-col md:flex-row justify-between md:flex-wrap">
          <div className="flex flex-col items-center basis-[30%] p-8 md:p-16 bg-base rounded-2xl gap-8 drop-shadow-md">
            <h1 className="text-primary font-bold text-3xl md:text-4xl">
              Масажи
            </h1>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl md:text-3xl text-white font-bold text-center">
                Пълен масаж
              </h2>
              <span className="text-xl md:text-2xl text-white opacity-70">
                50 минути
              </span>
              <h3 className="text-xl md:text-2xl text-white font-bold text-center">
                50,00 лв.
              </h3>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl md:text-3xl text-white font-bold text-center">
                Частичен масаж
              </h2>
              <span className="text-xl md:text-2xl text-white opacity-70">
                25 минути
              </span>
              <h3 className="text-xl md:text-2xl text-white font-bold text-center">
                30 лв.
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center basis-[30%] p-8 md:p-16 bg-base rounded-2xl gap-8 drop-shadow-md">
            <h1 className="text-primary font-bold text-3xl md:text-4xl">
              Фитнес
            </h1>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl md:text-3xl text-white font-bold text-center">
                Еднократна тренировка
              </h2>
              <span className="text-xl md:text-2xl text-white opacity-70">
                9,00 лв.
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl md:text-3xl text-white font-bold text-center">
                Месечна карта
              </h2>
              <span className="text-xl md:text-2xl text-white opacity-70">
                79,00 лв.
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl md:text-3xl text-white font-bold text-center">
                8 посещения <div className="text-primary inline-block">*</div>
              </h2>
              <span className="text-xl md:text-2xl text-white opacity-70">
                59,00 лв.
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl md:text-3xl text-white font-bold text-center">
                12 посещения <div className="text-primary inline-block">*</div>
              </h2>
              <span className="text-xl md:text-2xl text-white opacity-70">
                85,00 лв.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center basis-[30%] p-8 md:p-16 bg-base rounded-2xl gap-8 drop-shadow-md">
            <h1 className="text-primary font-bold text-3xl md:text-4xl">
              Кикбокс
            </h1>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl md:text-3xl text-white font-bold text-center">
                Индивидуална тренировка
              </h2>
              <span className="text-xl md:text-2xl text-white opacity-70">
                60 минути
              </span>
              <h3 className="text-xl md:text-2xl text-white font-bold text-center">
                50,00 лв.
              </h3>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl md:text-3xl text-white font-bold text-center">
                Групова тренировка
              </h2>
              <span className="text-xl md:text-2xl text-white opacity-70">
                90 минути
              </span>
              <h3 className="text-xl md:text-2xl text-white font-bold text-center">
                30,00 лв.
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-full p-8 md:p-16 bg-base rounded-2xl drop-shadow-md">
            <span className="text-bold text-xl md:text-3xl text-white">
              <div className="text-primary inline-block">*</div> Картите на
              посещения са с валидност 3 месеца.
            </span>
            <h1 className="text-primary text-4xl md:text-6xl">10% отстъпка </h1>
            <span className="text-bold text-xl md:text-3xl text-white">
              &quot;Семейство, приятели и съученици&quot; - при закупуване
              едновременно на две (или повече) МЕСЕЧНИ карти ползвате 10%
              отстъпка от стойността им. Всички притежатели на месечни карти
              ползват отстъпки от цените на хранителните добавки, дрехите и
              аксесоарите, предлагани в магазин Жълто (подробна информация - в
              магазина).
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
