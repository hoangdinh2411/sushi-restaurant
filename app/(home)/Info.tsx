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
            <div className="w-full max-w-auto p-8 sm:p-12 lg:p-0 lg:max-w-[320px] text-primary">
              <h3 className="text-5xl/13 font-medium w-full text-left">
                Ta dig bortom traditionell sushi
              </h3>
              <p className="text-sm/6 mt-2">
                På {META_DATA.appName} prövar vi ständigt nya kombinationer och
                smaker. Modernt, nyfiket och internationellt, samtidigt som det
                slår an på det traditionella hantverket. Som gäst ska du alltid
                känna dig positivt överraskad.
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
                Asian fusion, på vårt vis
              </h3>
              <p className="text-sm/6 mt-2">
                Från start har {META_DATA.appName} mål varit att förändra
                sushilandskapet och göra sushi tillgängligt för alla. Vi arbetar
                med att förena det svenska med det japanska. Traditionell
                japansk kvalitetssushi förenat med svenska smaker och svensk
                service kombinerat med japansk gästfrihet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
