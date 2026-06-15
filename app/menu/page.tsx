export const revalidate = 3600;
import type { Metadata } from "next";
import MenuList from "@/components/menu/MenuList";
import { META_DATA } from "@/utils/constant";

export const metadata: Metadata = {
  title: "Sushi Meny Helsingborg | Japansk & Vietnamesisk Mat",
  description:
    "Utforska vår meny med sushi, japanska bowls och vietnamesisk mat i Helsingborg. Beställ online eller besök oss.",
  alternates: {
    canonical: `${META_DATA.domain}/menu`,
  },
  openGraph: {
    title: "Sushi Meny Helsingborg",
    description:
      "Autentisk sushi och asiatisk mat i Helsingborg. Se hela menyn här.",
    url: `${META_DATA.domain}/menu`,
    siteName: META_DATA.appName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushi Meny Helsingborg",
    description: "Utforska sushi och asiatisk meny i Helsingborg.",
  },
};

async function fetchMenu() {
  const res = await fetch(
    "https://api.github.com/repos/hoangdinh2411/sushi-restaurant/releases/tags/v1.0.0",
    {
      redirect: "follow",
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    },
  );
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }
  const release = await res.json();
  if (!Array.isArray(release.assets)) {
    throw new Error("No assets in release");
  }
  const menuAsset = release.assets?.find(
    (asset: { name: string }) => asset.name === "menu.json",
  );
  if (!menuAsset) {
    throw new Error("menu.json not found in release assets");
  }
  const menuRes = await fetch(menuAsset.browser_download_url, {
    redirect: "follow",
    next: { revalidate: 3600 },
  });

  if (!menuRes.ok) {
    throw new Error(`Asset download failed: ${menuRes.status}`);
  }
  const menuData = await menuRes.json();
  return menuData;
}
export default async function MenuPage() {
  const dataJson = await fetchMenu();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: META_DATA.appName,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Helsingborg",
              addressCountry: "SE",
            },
            servesCuisine: ["Japanese", "Vietnamese", "Asian"],
            menu: `${META_DATA.domain}/menu`,
            url: `${META_DATA.domain}/menu`,
          }),
        }}
      />
      <article
        className="py-16 lg:py-25 w-full max-w-5xl mx-auto px-4 lg:px-0"
        id="menu"
      >
        <div className="text-center mb-16 px-2">
          <h6 className="text-xl font-medium tracking-widest uppercase">
            {META_DATA.appName}
          </h6>
          <h1 className="my-6 text-4xl lg:text-5xl font-semibold">
            Sushi Meny i Helsingborg
          </h1>
          <p className="text-primary/60 text-sm">{META_DATA.address}</p>
        </div>
        <MenuList groups={dataJson.menu} />
      </article>
    </>
  );
}
