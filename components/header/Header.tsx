import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="h-auto py-5 min-h-20  px-2 lg:px-4 fixed top-0  left-0 w-full z-50 flex items-center justify-start">
      <Link
        href="/"
        className="block"
        scroll
      >
        <Image
          loading="eager"
          alt="Myzuki"
          width={0}
          height={0}
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 640px"
          src="/images/logo.png"
          className=" h-15 lg:h-22 object-contain "
          style={{ width: "auto" }}
        />
      </Link>
      <MobileMenu />
    </header>
  );
}
