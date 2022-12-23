import Image from "next/image";
import Link from "next/link";
import { Phone, Envelope, FacebookLogo, InstagramLogo } from "phosphor-react";

const Footer = () => {
  return (
    <footer className="flex justify-center px-36 py-20 pb-24 bg-base">
      <div className="flex w-full flex-col md:flex-row justify-between gap-20 max-w-[1440px]">
        <div className="flex flex-col gap-10">
          <Image
            src="/static/images/logo_white.svg"
            alt="Logo"
            width={135}
            height={40}
          />
          <div className="flex items-center gap-5 text-white">
            <Phone size={32} />
            <span className="text-xl text-white">0887 200 104</span>
          </div>
          <div className="flex items-center gap-5 text-white">
            <Envelope size={32} />
            <span className="text-xl text-white">info@yeee.bg</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-primary font-bold text-2xl mb-6">
            Други страници
          </h1>
          <Link
            href="/"
            className="text-lg text-white hover:text-primary transition-all"
          >
            Начало
          </Link>
          <Link
            href="instructors"
            className="text-lg text-white hover:text-primary transition-all"
          >
            Инструктори
          </Link>
          <Link
            href="pricing"
            className="text-lg text-white hover:text-primary transition-all"
          >
            Ценоразпис
          </Link>
          <Link
            href="schedule"
            className="text-lg text-white hover:text-primary transition-all"
          >
            График
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-primary font-bold text-2xl mb-6">
            Последвайте ни
          </h1>
          <div className="flex gap-5 items-center">
            <Link
              href="https://www.facebook.com/profile.php?id=100042601045606"
              target="_blank"
              className="flex justify-center items-center w-fit bg-primary p-3 rounded-full text-base cursor-pointer"
            >
              <FacebookLogo size={32} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100042601045606"
              target="_blank"
              className="flex justify-center items-center w-fit bg-primary p-3 rounded-full text-base cursor-pointer"
            >
              <InstagramLogo size={32} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
