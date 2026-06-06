import { META_DATA } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full h-100 bg-black pt-13 flex items-center flex-col gap-10 justify-center text-white!">
      <article className="flex items-center justify-start px-16 flex-col gap-2.5 font-medium text-center">
        <h3 className="text-lg">{META_DATA.appName}</h3>
        <p className="text-sm">{META_DATA.address}</p>
        <p className="text-sm flex gap-1">
          Telefon:
          <Link href={`tel:${META_DATA.phone}`}>{META_DATA.phone}</Link>
        </p>
      </article>
      <div className="flex mx-auto gap-4 justify-center">
        <Link href="facebook.com">
          <Image
            src="icons/facebook.svg"
            title="Följ på Facebook"
            alt="Följ på Facebook"
            width={22}
            height={22}
          />
        </Link>
        <Link href="tiktok.com">
          <Image
            src="icons/tiktok.svg"
            title="Följ på TikTok"
            alt="Följ på TikTok"
            width={20}
            height={20}
          />
        </Link>
      </div>

      <p className="text-sm text-primary/40">
        © 2026 {META_DATA.appName}. All rights reserved
      </p>
    </footer>
  );
}
