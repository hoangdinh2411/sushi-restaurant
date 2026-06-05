import CustomParallaxBanner from "@/components/parallax-banner/CustomParallaxBanner";
import { META_DATA } from "@/utils/constant";
import React from "react";

type Props = {};

export default function Info({}: Props) {
  return (
    <section className="">
      <div className="w-full ">
        {/* Row 1: Text | Image */}
        <div className="flex flex-wrap ">
          <div className="w-full lg:w-1/2 flex justify-center  h-auto  min-h-120 sm:min-h-100  lg:h-150  items-center flex-col ">
            <div className="w-full max-w-auto p-8 sm:p-12 lg:p-0 lg:max-w-100 text-primary">
              <h3 className="text-3xl lg:text-5xl leading-10 lg:leading-16  font-medium w-full text-left">
                Upptäck {META_DATA.appName} - Din destination för en smakresa
                genom Asien
              </h3>
              <p className="text-sm lg:text-base leading-6 mt-2">
                Vi välkomnar dig till en värld av exklusiva smaker, kvalitet,
                färska råvaror och modern asiatisk matkonst. På Myzuki Sushi &
                Asiatisk Restaurang möts tradition och innovation i en elegant
                miljö där varje rätt tillagas med precision, passion och omsorg.
                Oavsett om du besöker oss för lunch, middag eller en speciell
                stund tillsammans med familjer, kollegor eller vänner
              </p>
            </div>
          </div>
          <figure className="relative w-full lg:w-1/2  h-auto min-h-120 sm:min-h-100  lg:h-150 ">
            <CustomParallaxBanner
              image="/images/demo.webp"
              className="object-cover absolute left-0 top-0 size-full"
            />
          </figure>
        </div>

        {/* Row 2: Image | Text — reversed on desktop */}
        <div className="flex flex-wrap">
          <figure className="relative w-full order-2 lg:order-1 lg:w-1/2  h-auto min-h-120 sm:min-h-100 lg:h-150 ">
            <CustomParallaxBanner
              image="/images/demo.webp"
              className="object-cover absolute left-0 top-0 size-full"
            />
          </figure>
          <div className="w-full lg:w-1/2 flex order-1 lg:order-2 justify-center h-auto min-h-120  sm:min-h-100  lg:h-150 items-center flex-col">
            <div className="w-full max-w-auto p-8 sm:p-12 lg:p-0 lg:max-w-[320px] text-primary">
              <h3 className="text-5xl/13 font-medium w-full text-left">
                Hantverk från noggrant utvalda råvaror
              </h3>
              <p className="text-sm/6 mt-2">
                Vi tror att fantastisk mat börjar med noggrant utvalda råvaror.
                Därför använder vi färska ingredienser och traditionella
                tillagningsmetoder i kombination med moderna influenser för att
                skapa smaker som både överraskar och inspirerar. Från handgjord
                sushi och färsk sashimi till asiatiska specialiteter och varma
                rätter – varje servering är skapad med precision och omsorg. Mer
                än sushi – en upplevelse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
