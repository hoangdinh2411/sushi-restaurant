import OpeningHours from "./(home)/OpeningHours";
import FollowOss from "./(home)/FollowOss";
import Info from "./(home)/Info";
import { META_DATA } from "@/utils/constant";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: META_DATA.appName,
            url: META_DATA.baseUrl,
            servesCuisine: ["Japanese", "Vietnamese", "Asian"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Helsingborg",
              addressCountry: "SE",
            },
          }),
        }}
      />
      <Info />
      <OpeningHours />
      <FollowOss />
    </>
  );
}
