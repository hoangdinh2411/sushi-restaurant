import { META_DATA } from "@/utils/constant";

export default function OpeningHours() {
  return (
    <section className="bg-primary py-20 text-black   ">
      <div className="mx-auto max-w-4xl text-center px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">
          Öppettider {META_DATA.appName}
        </h2>

        <div className="space-y-3 text-lg lg:text-2xl font-bold">
          <p>Måndag – Torsdag 11.30 – 21</p>
          <p>Lördag - Söndag 12 – 21</p>
        </div>

        <hr className="my-16 border-black" />

        <h3 className="text-2xl lg:text-3xl font-semibold mb-10">
          Öppettider för avhämtning
        </h3>

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
            Drop in välkomnas i mån av plats. På uteserveringen tar vi enbart drop in-gäster.
          </p>
        </div>
      </div>
    </section>
  );
}
