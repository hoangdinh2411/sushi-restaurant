import type { Metadata } from "next";
import { META_DATA } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakta ${META_DATA.appName} i Helsingborg. Adress: ${META_DATA.address}. Öppettider, telefon och karta.`,
  alternates: { canonical: "/contact" },
};

const OPENING_HOURS = {
  dineIn: [
    { days: "Måndag – Torsdag", hours: "11.30 – 21" },
    { days: "Lördag – Söndag", hours: "12 – 21" },
  ],
  takeAway: [
    { days: "Måndag – Torsdag", hours: "11.30 – 21" },
    { days: "Lördag – Söndag", hours: "12 – 21" },
  ],
};

const SOCIAL = [
  {
    href: "https://facebook.com",
    icon: "/icons/facebook.svg",
    label: "Facebook",
  },
  { href: "https://tiktok.com", icon: "/icons/tiktok.svg", label: "TikTok" },
];

function HoursBlock({
  title,
  hours,
}: {
  title: string;
  hours: typeof OPENING_HOURS.dineIn;
}) {
  return (
    <div
      className="text-center lg:text-left"
      id="contact"
    >
      <h3 className="text-lg font-semibold mb-4 tracking-wide">{title}</h3>
      <ul className="space-y-2">
        {hours.map(({ days, hours: h }) => (
          <li
            key={days}
            className="flex justify-center lg:justify-between gap-4 lg:gap-8 text-sm flex-wrap"
          >
            <span className="text-primary/70">{days}</span>
            <span className="font-medium">{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ContactPage() {
  return (
    <article
      className="py-16 lg:py-25 w-full max-w-5xl mx-auto px-4 lg:px-0"
      id="contact"
    >
      <div className="text-center mb-16">
        <h6 className="text-xl font-medium tracking-widest uppercase">
          {META_DATA.appName}
        </h6>
        <h2 className="my-6 text-4xl lg:text-5xl font-semibold">Kontakt</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Contact info */}
        <div className="space-y-10 text-center lg:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Hitta oss
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={`https://maps.google.com/?q=${encodeURIComponent(META_DATA.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/70 hover:text-primary transition-colors"
                >
                  {META_DATA.address}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${META_DATA.phone}`}
                  className="text-primary/70 hover:text-primary transition-colors"
                >
                  {META_DATA.phone}
                </Link>
              </li>
              <li>
                <Link
                  href={`https://${META_DATA.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/70 hover:text-primary transition-colors"
                >
                  {META_DATA.domain}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Följ oss
            </h3>
            <div className="flex gap-4 justify-center lg:justify-start">
              {SOCIAL.map(({ href, icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label={label}
                >
                  <Image
                    src={icon}
                    alt={label}
                    width={22}
                    height={22}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Opening hours */}
        <div className="space-y-10">
          <HoursBlock
            title="Öppettider"
            hours={OPENING_HOURS.dineIn}
          />
          <div className="border-t border-primary/15 pt-10">
            <HoursBlock
              title="Öppettider avhämtning"
              hours={OPENING_HOURS.takeAway}
            />
          </div>
          <p className="text-primary/40 text-xs leading-relaxed text-center lg:text-left">
            Under helgdagar och röda dagar kan öppettiderna variera. Se vår
            Google-profil för aktuella tider. Drop in finns i mån av plats.
          </p>
        </div>
      </div>
      {/* Google Maps */}
      <div className="mt-16 border-t border-primary/15 pt-12">
        <h3 className="text-lg font-semibold mb-6 tracking-wide text-center lg:text-left">
          Hitta hit
        </h3>
        <div className="w-full h-80 lg:h-[450px] overflow-hidden">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(META_DATA.address)}&z=16&output=embed`}
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(1) invert(0.9) contrast(0.85)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Karta – ${META_DATA.address}`}
          />
        </div>
      </div>
    </article>
  );
}
