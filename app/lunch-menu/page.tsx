import type { Metadata } from "next";
import { META_DATA } from "@/utils/constant";
import React from "react";

export const metadata: Metadata = {
  title: "Lunchmeny",
  description:
    `Lunchmeny 139kr – inkl. miso soppa, kaffe och te. Serveras 11:30–14 varje vardag. Välkommen till ${META_DATA.appName} i Helsingborg.`,
  alternates: { canonical: "/lunch-menu" },
};

type Props = {};

export default function LunchMenuPage({}: Props) {
  return (
    <article className="py-25 w-full max-w-5xl mx-auto ">
      <div className="mx-auto text-center px-2">
        <h6 className="text-[20px] font-medium">{META_DATA.appName}</h6>
        <h2 className="my-6 leading-14">Lunch Meny 139kr</h2>
        <p className="my-4 opacity-70">Miso soppa, kaffe, te ingår</p>
        <b className="text-2xl font-bold ">11:30-14</b>
      </div>

      <div>
        <p></p>
      </div>
    </article>
  );
}
