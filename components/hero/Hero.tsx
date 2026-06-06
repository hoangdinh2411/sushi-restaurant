import { ROUTERS } from "@/utils/routers";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section
      className="w-full relative h-screen max-h-200 flex flex-col"
      id="top"
    >
      {/* Background video */}
      <video
        muted
        className="absolute left-0 top-0 size-full object-cover"
        playsInline
        autoPlay
        src="https://www.sushievolushi.se/wp-content/uploads/2025/04/video_12.mp4"
      />

      {/* Foreground layout — 3 rows: top spacer / title / bottom CTA */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Row 1 — empty top spacer */}
        <div className="flex-1" />

        {/* Row 2 — welcome title (centered) */}
        <div className="text-center pointer-events-none select-none px-4">
          <p
            className="text-[clamp(2.5rem,9vw,8rem)] font-serif leading-tight tracking-tight"
            style={{ color: "rgba(232, 224, 213, 0.35)" }}
          >
            Välkommen till
          </p>
          <p
            className="text-[clamp(2.5rem,9vw,8rem)] font-serif leading-tight tracking-tight italic"
            style={{ color: "#C9A96E" }}
          >
            Myzuki
          </p>
        </div>

        {/* Row 3 — CTA section (always below title, never overlaps) */}
        <div className="flex-1 flex flex-col items-center justify-end pb-16 lg:pb-24 px-4">
          <p className="text-lg sm:text-2xl md:text-3xl leading-snug mb-8 font-semibold text-center">
            Autentisk sushi. Äkta smaker. Oförglömliga stunder.
          </p>
          <div className="flex gap-6 items-center justify-center flex-col md:flex-row">
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
      </div>
    </section>
  );
}
