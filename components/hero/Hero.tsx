import { ROUTERS } from "@/utils/routers";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="bg-red  w-full relative  h-screen max-h-200">
      <video
        muted
        className="absolute left-0 top-0 size-full object-cover"
        playsInline
        autoPlay
        src="https://www.sushievolushi.se/wp-content/uploads/2025/04/video_12.mp4"
      ></video>
      <div className="absolute bottom-40 lg:bottom-60 left-1/2 -translate-x-1/2">
        <div className=" flex gap-8 items-center flex-col lg:flex-row">
          <Link
            className="header-button group"
            href={ROUTERS.LUNCH_MENU}
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-3">
              Lunchmeny
            </span>
            <span className="absolute right-10 opacity-0 -translate-x-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <Image
                alt="arrow-right"
                src={"icons/chevron-right.svg"}
                width={24}
                height={24}
              />
            </span>
          </Link>
          <Link
            className="header-button group"
            href={ROUTERS.MENU}
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-3">
              Meny
            </span>
            <span className="absolute right-10 opacity-0 -translate-x-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <Image
                alt="arrow-right"
                src={"icons/chevron-right.svg"}
                width={24}
                height={24}
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
