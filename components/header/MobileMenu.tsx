"use client";
import { ROUTERS } from "@/utils/routers";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};
const Menu = [
  {
    id: 1,
    label: "Hem",
    href: ROUTERS.HOME,
  },
  {
    id: 2,
    label: "Meny",
    href: ROUTERS.MENU,
  },
  {
    id: 3,
    label: "Kontakt",
    href: ROUTERS.CONTACT,
  },
];

export default function MobileMenu({}: Props) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <span
        className={` cursor-pointer  p-4 absolute top-1/2 right-4 lg:right-12 -translate-y-1/2 `}
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

      <div
        className={`${open ? " translate-x-0 opacity-100 visible" : " translate-x-200 opacity-0 invisible"} bg-black duration-100 pl-8 lg:pr-16 ease-in transition-all  fixed top-0 right-0 w-full lg:max-w-100 h-[90%] lg:h-full`}
      >
        <div className="relative flex justify-center h-30 pt-5 mb-30">
          <Link
            href="/"
            className="block lg:hidden"
          >
            <Image
              loading="eager"
              alt="Myzuki"
              width={0}
              height={0}
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 640px"
              src="/images/logo.png"
              className="h-20 lg:h-22 object-contain "
              style={{ width: "auto" }}
            />
          </Link>
          <span
            className=" cursor-pointer  p-4 absolute top-1/2 right-4 lg:right-2 -translate-y-1/2 "
            onClick={toggleMenu}
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
        <div className="flex flex-col gap-2  w-full pr-8 lg:pr-0">
          {Menu.map((item) => (
            <Link
              key={item.id}
              href={item.href}
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
