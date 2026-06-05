import type { Metadata } from "next";
import { META_DATA } from "@/utils/constant";
import React from "react";

export const metadata: Metadata = {
  title: "Lunchmeny",
  description: `Lunchmeny 139kr – inkl. miso soppa, kaffe och te. Serveras 11:30–14 varje vardag. Välkommen till ${META_DATA.appName} i Helsingborg.`,
  alternates: { canonical: "/lunch-menu" },
};

type Props = {};

const data = [{}];
export default function LunchMenuPage({}: Props) {
  return (
    <article
      className="py-25 w-full max-w-2xl mx-auto px-4 "
      id="lunch-menu"
    >
      <div className="mx-auto text-center px-2 mb-15">
        <h6 className="text-[20px] font-medium">{META_DATA.appName}</h6>
        <h2 className="my-6 leading-14">Lunch Meny 139kr</h2>
        <p className="my-4 opacity-70">Miso soppa, kaffe, te ingår</p>
        <b className="text-2xl font-bold ">11:30-14</b>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between gap-3 lg:gap-6 flex-wrap w-full max-w-xl mx-auto ">
          <p className="group relative text-base lg:text-lg font-bold after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full">
            Stekta nudlar
          </p>
          <p className="group relative text-base lg:text-lg font-bold after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full">
            Ris med chicken katsu
          </p>
          <p className="group relative text-base lg:text-lg font-bold after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full">
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
  );
}
