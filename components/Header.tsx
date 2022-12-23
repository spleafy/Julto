import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Phone, Envelope } from "phosphor-react";

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-20 py-14">
      <Link href="/">
        <Image
          src="/static/images/logo.svg"
          alt="Logo"
          width={140}
          height={40}
        />
      </Link>
      <div className="flex items-center gap-16">
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
      <div className="flex items-center gap-14">
        <Link href="tel:0887 200 104">
          <Phone size={32} weight="duotone" className="cursor-pointer" />
        </Link>
        <Link href="mailto:info@yeee.bg">
          <Envelope size={32} weight="duotone" className="cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
