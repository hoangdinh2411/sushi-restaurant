export const revalidate = 86400;
import type { Metadata } from "next";
import { META_DATA } from "@/utils/constant";
import React from "react";

export const metadata: Metadata = {
  title: "Lunchmeny 139kr | Sushi & Asian Lunch i Helsingborg",
  description:
    "Lunchmeny 139kr inkl. miso soppa, kaffe och te. Serveras vardagar 11:30–14. Japansk och asiatisk lunch i Helsingborg hos " +
    META_DATA.appName,
  alternates: {
    canonical: META_DATA.domain + "/lunch-menu",
  },
  openGraph: {
    title: "Lunchmeny 139kr | Helsingborg",
    description:
      "Lunchmeny med japansk och asiatisk mat. 139kr inkl. dryck och soppa.",
    url: META_DATA.domain + "/lunch-menu",
    type: "website",
  },
};

type Props = {};

export default function LunchMenuPage({}: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: META_DATA.appName,
            servesCuisine: "Japanese, Asian",
            priceRange: "139 SEK",
            menu: META_DATA.domain + "/lunch-menu",
          }),
        }}
      />
      <article
        className="py-16 lg:py-25 w-full max-w-2xl mx-auto px-4"
        id="lunch-menu"
      >
        <div className="mx-auto text-center px-2 mb-15">
          <h6 className="text-[20px] font-medium">{META_DATA.appName}</h6>
          <h1 className="sr-only">
            Lunchmeny 139kr i Helsingborg - {META_DATA.appName}
          </h1>
          <p className="my-4 opacity-70">Miso soppa, kaffe, te ingår</p>
          <b className="text-2xl font-bold ">11:30-14</b>
        </div>

        <div className="space-y-8 max-w-lg mx-auto ">
          <div className="grid grid-cols-2 gap-8">
            <p className="group relative text-base lg:text-lg font-bold ">
              Japanska bowl
            </p>
            <p className="group relative text-base lg:text-lg font-bold ">
              Stekta nudlar
            </p>
            <p className="group relative text-base lg:text-lg font-bold ">
              Ris med chicken katsu
            </p>
            <p className="group relative text-base lg:text-lg font-bold ">
              Yakiniku
            </p>
          </div>
          <div className="max-w-lg mx-auto w-full space-y-2">
            <div className=" border-b  border-solid border-primary/20  py-2 grid grid-cols-2">
              <p className=" text-base lg:text-xl  font-bold ">Måndag: </p>
              <p className="flex gap-2 flex-col flex-wrap lg:gap-4 relative  text:sm lg:text-lg  text-left   ">
                <b>Ebi Tempura</b> <b>Sake roll</b>
              </p>
            </div>
            <div className=" border-b  border-solid border-primary/20  py-2 grid  grid-cols-2">
              <p className=" text-base lg:text-xl  font-bold ">Tisdag: </p>
              <p className="flex gap-2 flex-col flex-wrap lg:gap-4 relative  text:sm lg:text-lg  text-left   ">
                <b>Super Crunch</b> <b>Greenroll</b>
              </p>
            </div>
            <div className=" border-b  border-solid border-primary/20  py-2 grid  grid-cols-2">
              <p className=" text-base lg:text-xl  font-bold ">Onsdag: </p>
              <p className="flex gap-2 flex-col flex-wrap lg:gap-4 relative  text:sm lg:text-lg  text-left   ">
                <b>Myzuki Special</b> <b> Sake roll</b>
              </p>
            </div>
            <div className=" border-b  border-solid border-primary/20  py-2 grid  grid-cols-2">
              <p className=" text-base lg:text-xl  font-bold ">Torsdag: </p>
              <p className="flex gap-2 flex-col flex-wrap lg:gap-4 relative  text:sm lg:text-lg text-left   ">
                <b>Grilla Maki med lax</b> <b> California</b>
              </p>
            </div>
            <div className=" border-b  border-solid border-primary/20  py-2 grid  grid-cols-2">
              <p className=" text-base lg:text-xl  font-bold ">Fredag: </p>
              <p className="flex gap-2 flex-col flex-wrap lg:gap-4 relative  text:sm lg:text-lg text-left   ">
                <b> Cream Cheese roll</b> <b> Green roll</b>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
