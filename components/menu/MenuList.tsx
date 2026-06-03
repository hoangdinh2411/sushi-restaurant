import menuData from "@/data/menu.json";

type MenuItem = (typeof menuData.menu)[0]["items"][0];
type MenuGroup = (typeof menuData.menu)[0];

const LONG_DESC_THRESHOLD = 60;

function groupHasLongDescriptions(items: MenuItem[]): boolean {
  return items.some(
    (item) => item.description && item.description.length > LONG_DESC_THRESHOLD
  );
}

export default function MenuList({ groups }: { groups: MenuGroup[] }) {
  return (
    <div className="space-y-16">
      {groups.map((group) => {
        const isLong = groupHasLongDescriptions(group.items);
        const gridClass = isLong
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
        const gapClass = isLong ? "gap-3 lg:gap-4" : "gap-x-6 gap-y-2";
        const itemClass = "p-4";

        return (
          <section key={group.group}>
            <div className="mb-6 border-b border-primary/20 pb-4">
              <h3 className="text-[42px] font-semibold tracking-widest">
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
                <div key={item.name} className={itemClass}>
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
