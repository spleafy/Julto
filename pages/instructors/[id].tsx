import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "phosphor-react";
// Components
import Section from "../../components/layout/Section";
// Json
import coaches from "../../public/static/coaches.json";

const Instructor = () => {
  const router = useRouter();

  const { id } = router.query;

  const coach = coaches[Number(id) - 1];

  return (
    <Section className="bg-white">
      {coach ? (
        <div className="flex w-full flex-col md:flex-row gap-10 md:gap-40 items-center">
          <div className="flex flex-col w-full md:w-fit">
            <div className="flex justify-center items-center relative max-w-[450px] w-full md:w-[450px] aspect-square">
              <Image
                src={coach.photo}
                alt="Coach Photo"
                className="object-cover rounded-md"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl md:text-6xl text-gray-900">{coach.name}</h1>

            <span className="text-xl md:text-3xl text-gray-700">
              {coach.speciality}
            </span>
            <Link
              className="flex items-center gap-5 text-gray-900"
              href={`tel:${coach.phone}`}
            >
              <Phone size={32} />
              <span className="text-xl md:text-3xl text-imherit">
                {coach.phone}
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex w-[240px] h-[240px] relative animate-pulse">
          <Image src="/static/images/logo_white.svg" alt="Logo" fill />
        </div>
      )}
    </Section>
  );
};

export default Instructor;
