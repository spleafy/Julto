import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Phone, Envelope, X, List } from "phosphor-react";

const Header = () => {
  const router = useRouter();

  const [expanded, setExpanded] = useState(false);

  return (
    <header className="flex items-center justify-between px-10 lg:px-20 py-14">
      <Link href="/">
        <Image
          src="/static/images/logo.svg"
          alt="Logo"
          width={140}
          height={40}
        />
      </Link>
      <div className="hidden md:flex items-center gap-4 md:gap-16">
        <Link href="/" className={router.pathname == "/" ? "font-bold" : ""}>
          Начало
        </Link>
        <Link
          href="/instructors"
          className={router.pathname == "/instructors" ? "font-bold" : ""}
        >
          Инструктори
        </Link>
        <Link
          href="/pricing"
          className={router.pathname == "/pricing" ? "font-bold" : ""}
        >
          Ценоразпис
        </Link>
        <Link
          href="/schedule"
          className={router.pathname == "/schedule" ? "font-bold" : ""}
        >
          График
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-14">
        <Link href="tel:0887 200 104">
          <Phone size={32} weight="duotone" className="cursor-pointer" />
        </Link>
        <Link href="mailto:info@yeee.bg">
          <Envelope size={32} weight="duotone" className="cursor-pointer" />
        </Link>
      </div>
      <div className="md:hidden flex text-base">
        <List
          size={32}
          onClick={() => setExpanded(true)}
          className="cursor-pointer"
        />
      </div>
      <div
        className={`md:hidden flex flex-col w-full h-full items-center py-14 px-10 gap-10 bg-primary fixed top-0 z-50 transition-all ${
          expanded ? "left-0" : "left-[100%]"
        }`}
      >
        <div className="flex items-center justify-end w-full text-base">
          <X
            size={32}
            className="cursor-pointer hover:rotate-180 transition-all"
            onClick={() => setExpanded(false)}
          />
        </div>
        <div className="flex flex-col grow items-center justify-center gap-16 text-2xl">
          <Link
            href="/"
            className={router.pathname == "/" ? "font-bold" : ""}
            onClick={() => setExpanded(false)}
          >
            Начало
          </Link>
          <Link
            href="/instructors"
            className={router.pathname == "/instructors" ? "font-bold" : ""}
            onClick={() => setExpanded(false)}
          >
            Инструктори
          </Link>
          <Link
            href="/pricing"
            className={router.pathname == "/pricing" ? "font-bold" : ""}
            onClick={() => setExpanded(false)}
          >
            Ценоразпис
          </Link>
          <Link
            href="/schedule"
            className={router.pathname == "/schedule" ? "font-bold" : ""}
            onClick={() => setExpanded(false)}
          >
            График
          </Link>
          <div className="flex items-center gap-14">
            <Link href="tel:0887 200 104">
              <Phone size={32} weight="duotone" className="cursor-pointer" />
            </Link>
            <Link href="mailto:info@yeee.bg">
              <Envelope size={32} weight="duotone" className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
