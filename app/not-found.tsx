import Link from "next/link";
import { ROUTERS } from "@/utils/routers";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <p className="text-primary/40 text-sm tracking-widest uppercase">404</p>
      <h1 className="text-5xl lg:text-7xl font-semibold">Sidan hittades inte</h1>
      <p className="text-primary/60 max-w-md">
        Sidan du letar efter finns inte eller har flyttats.
      </p>
      <Link
        href={ROUTERS.HOME}
        className="header-button mt-4"
      >
        Tillbaka till start
      </Link>
    </section>
  );
}
