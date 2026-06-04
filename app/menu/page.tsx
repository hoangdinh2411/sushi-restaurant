import type { Metadata } from "next";
import MenuList from "@/components/menu/MenuList";
import menuData from "@/data/menu.json";
import { META_DATA } from "@/utils/constant";

export const metadata: Metadata = {
  title: "Meny",
  description:
    "Utforska vår meny med autentisk sushi, japanska bowls och vietnamesisk mat i Helsingborg. Beställ direkt eller kom in till oss.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <article
      className="py-25 w-full max-w-5xl mx-auto px-4 lg:px-0"
      id="menu"
    >
      <div className="text-center mb-16 px-2">
        <h6 className="text-xl font-medium tracking-widest uppercase">
          {META_DATA.appName}
        </h6>
        <h2 className="my-6 text-4xl lg:text-5xl font-semibold">Meny</h2>
        <p className="text-primary/60 text-sm">{META_DATA.address}</p>
      </div>
      <MenuList groups={menuData.menu} />
    </article>
  );
}
