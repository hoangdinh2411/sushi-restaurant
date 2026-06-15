import menuData from "@/data/menu.json";
import Link from "next/link";

type MenuItem = (typeof menuData.menu)[0]["items"][0];
type MenuGroup = (typeof menuData.menu)[0];

const LONG_DESC_THRESHOLD = 60;

function groupHasLongDescriptions(items: MenuItem[]): boolean {
  return items?.some(
    (item) => item.description && item.description.length > LONG_DESC_THRESHOLD,
  );
}

export default function MenuList({ groups }: { groups: MenuGroup[] }) {
  return (
    <div className="space-y-20">
      <div className="flex justify-between gap-6 lg:gap-8 flex-wrap w-full max-w-4xl mx-auto ">
        {groups &&
          groups?.map((group) => (
            <Link
              key={group.group}
              href={"#" + group.group}
              className="group relative text-lg font-bold after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
            >
              <p>
                {group.group}
                <span className="ml-1.5 text-sm opacity-30 transition-opacity duration-300 group-hover:opacity-100">
                  ↓
                </span>
              </p>
            </Link>
          ))}
      </div>

      {groups &&
        groups?.map((group) => {
          const isLong = groupHasLongDescriptions(group.items);
          const gridClass = isLong
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
          const gapClass = isLong ? "gap-3 lg:gap-4" : "gap-x-6 gap-y-2";
          const itemClass = "p-4";

          return (
            <section
              key={group.group}
              id={group.group}
            >
              <div className="mb-6 border-b border-primary/20 pb-4">
                <h3 className="text-2xl sm:text-3xl lg:text-[42px] font-semibold tracking-widest">
                  {group.group}
                </h3>
                {group.description && (
                  <p className="text-primary/60 text-sm mt-2">
                    {group.description}
                  </p>
                )}
              </div>

              <div className={`grid ${gridClass} ${gapClass}`}>
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className={itemClass}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <h4 className="font-semibold text-primary leading-snug">
                        {item.name}
                      </h4>
                      {item.price !== null && (
                        <span className="text-primary font-medium whitespace-nowrap shrink-0">
                          {item.price} kr
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-primary/60 text-sm mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
    </div>
  );
}
