import { META_DATA } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";

export default function OpeningHours() {
  return (
    <section
      className="bg-primary py-20 text-black   "
      id="opening-hours"
    >
      <div className="mx-auto max-w-4xl text-center px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">
          Öppettider {META_DATA.appName}
        </h2>

        <div className="space-y-3 text-lg lg:text-2xl font-bold">
          <p>Måndag – Torsdag 11.30 – 21</p>
          <p>Lördag - Söndag 12 – 21</p>
        </div>

        <div className="mt-4 text-sm lg:text-base">
          <p className="leading-relaxed max-w-3xl mx-auto">
            Under helgdagar och röda dagar kan våra öppettider variera. Se vår
            Google-profil för aktuella tider.
          </p>
          <p className="leading-relaxed max-w-3xl mx-auto">
            Drop in välkomnas i mån av plats. På uteserveringen tar vi enbart
            drop in-gäster.
          </p>
        </div>
        <hr className="my-16 border-black" />

        <h3 className="text-2xl lg:text-3xl font-semibold mb-10">
          Boka din kväll hos oss
        </h3>

        <div className="text-lg lg:text-2xl font-bold flex flex-col gap-4">
          <p className="text-base max-w-xl mx-auto  lg:text-lg ">
            Tar emot bokningar till lunch och middag, sju dagar i veckan.
            Kontakta oss för större sällskap eller privata evenemang
          </p>
          <Link
            className="header-button bg-black max-w-120 mx-auto group"
            href={`tel:+${META_DATA.phone}`}
          >
            {/* Wrap both spans in a relative container so the hit area covers them */}
            <span className="relative flex items-center justify-center w-full">
              <span className="transition-transform duration-300 group-hover:-translate-x-6">
                Ring oss - {META_DATA.phone}
              </span>
              <span className="absolute -right-8 opacity-0 -translate-x-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <Image
                  alt="arrow-right"
                  src={"icons/chevron-right.svg"}
                  width={24}
                  height={24}
                />
              </span>
            </span>
          </Link>

          <small>eller</small>

          <Link
            className="header-button text-black max-w-120 mx-auto group"
            href={`mailto:${META_DATA.email}`}
          >
            <span className="relative flex items-center justify-center w-full">
              <span className="transition-transform duration-300 group-hover:-translate-x-3">
                Maila oss
              </span>
              <span className="absolute right-0 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <Image
                  alt="arrow-right"
                  src={"icons/chevron-right-black.svg"}
                  width={24}
                  height={24}
                />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
