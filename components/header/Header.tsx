import { Menu } from "lucide-react";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="h-20 p-4 relative">
      <h1>Sushi Restaurant</h1>
      <span className=" cursor-pointer  p-4 absolute top-1/2 right-4 -translate-y-1/2">
        <Menu className="size-6" />
      </span>
    </header>
  );
}
