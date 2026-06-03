import type { Metadata } from "next";
import MenuList from "@/components/menu/MenuList";
import menuData from "@/data/menu.json";
import { META_DATA } from "@/utils/constant";

export const metadata: Metadata = {
  title: "Take Away",
  description:
    "Beställ take away från Myzushi i Helsingborg. Hämta din sushi mån–tors 11:30–20, lör–sön 12–20. Elinebergsplatsen 5.",
  alternates: { canonical: "/take-away" },
};

export default function TakeAwayMenuPage() {
  return (
    <article className="py-25 w-full max-w-5xl mx-auto px-4 lg:px-0">
      <div className="text-center mb-16 px-2">
        <h6 className="text-xl font-medium tracking-widest uppercase">
          {META_DATA.appName}
        </h6>
        <h2 className="my-6 text-4xl lg:text-5xl font-semibold">Take Away</h2>
        <p className="text-primary/60 text-sm">{META_DATA.address}</p>
      </div>
      <MenuList groups={menuData.menu} />
    </article>
  );
}
