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
              <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-medium w-full text-left">
                Din smakresa genom Asien börjar här
              </h3>
              <p className="text-sm lg:text-base leading-relaxed mt-4">
                Färska råvaror, passion och modern asiatisk matkonst. Välkommen
                till Myzuki – för lunch, middag eller en minnesvärd kväll med
                familj, kollegor och vänner.
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
              <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-medium w-full text-left">
                Från råvara till tallrik – med precision
              </h3>
              <p className="text-sm lg:text-base leading-relaxed mt-4">
                Vi väljer varje ingrediens med omsorg. Handgjord sushi, färsk
                sashimi och varma asiatiska rätter – varje servering är en
                upplevelse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
