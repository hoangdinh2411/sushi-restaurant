"use client";
import { ROUTERS } from "@/utils/routers";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const Menu = [
  { id: 1, label: "Hem", href: ROUTERS.HOME },
  { id: 2, label: "Meny", href: ROUTERS.MENU },
  { id: 3, label: "Kontakt", href: ROUTERS.CONTACT },
  { id: 4, label: "Öppettider", href: "#opening-hours" },
];

export default function MobileMenu({}: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  // ✅ Handles both regular links AND hash links
  const handleNavClick = (href: string) => {
    closeMenu();

    if (href.startsWith("#")) {
      // Hash link — pathname won't change, so we scroll manually
      setTimeout(() => {
        const el = document.getElementById(href.slice(1)); // remove the "#"
        el?.scrollIntoView({ behavior: "smooth" });
      }, 150); // small delay lets the drawer close animation finish first
      return;
    }
  };

  // Only handles page-level navigation (pathname changes)
  useEffect(() => {
    closeMenu();

    if (pathname === ROUTERS.HOME) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const heroEl = document.getElementById("top");
      const heroHeight = heroEl?.offsetHeight ?? 0;
      window.scrollTo({ top: heroHeight, behavior: "smooth" });
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <span
        className="cursor-pointer p-4 absolute top-1/2 right-4 lg:right-12 -translate-y-1/2"
        onClick={toggleMenu}
      >
        <Image
          src="icons/menu.svg"
          height={32}
          width={32}
          alt="menu"
          className="size-6 lg:size-8"
        />
      </span>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={closeMenu}
        />
      )}

      <div
        className={`
        fixed top-0 right-0 z-50
        w-full lg:max-w-100 h-[90%] lg:h-full
        bg-black pl-8 lg:pr-16
        transition-all duration-300 ease-in-out
        ${open ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"}
      `}
      >
        <div className="relative flex justify-center h-30 pt-5 mb-30">
          <Link
            href="/"
            className="block lg:hidden"
            onClick={closeMenu}
          >
            <Image
              loading="eager"
              alt="Myzuki"
              width={0}
              height={0}
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 640px"
              src="/images/logo.png"
              className="h-20 lg:h-22 object-contain"
              style={{ width: "auto" }}
            />
          </Link>
          <span
            className="cursor-pointer p-4 absolute top-1/2 right-4 lg:right-2 -translate-y-1/2"
            onClick={closeMenu}
          >
            <Image
              src="icons/close.svg"
              height={28}
              width={28}
              alt="close menu"
              className="size-6 lg:size-8"
            />
          </span>
        </div>

        <div className="flex flex-col gap-2 w-full pr-8 lg:pr-0">
          {Menu.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="w-full py-4 text-base font-bold border-b-[0.5px] last:border-b-0 border-solid border-primary/30"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
