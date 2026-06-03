import Image from "next/image";
import React from "react";

type Props = {};

export default function FollowOss({}: Props) {
  return (
    <section className="py-10">
      <h3 className="text-center text-3xl font-semibold py-8">
        Följ oss på Facebook
      </h3>
      <p className="text-center text-primary mb-8 text-base">
        Håll dig uppdaterad med våra senaste nyheter och erbjudanden
      </p>
      <div className="flex justify-center mb-8">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border-2 border-primary text-primary px-10 py-4 font-semibold hover:bg-primary hover:text-secondary transition-colors"
        >
          <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
          Besök oss på Facebook
        </a>
      </div>
      <div className="w-full max-w-5xl mx-auto grid grid-cols-3 gap-2 lg:gap-4 ">
        <figure className="relative col-span-1 aspect-square bg-black rounded overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="image"
            fill
            loading="eager"
            sizes="400px"
            className="absolute"
          />
        </figure>
        <figure className="relative col-span-1 aspect-square bg-black rounded overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="image"
            fill
            loading="eager"
            sizes="400px"
            className="absolute"
          />
        </figure>
        <figure className="relative col-span-1 aspect-square bg-black rounded overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="image"
            fill
            loading="eager"
            sizes="400px"
            className="absolute"
          />
        </figure>
        <figure className="relative col-span-1 aspect-square bg-black rounded overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="image"
            fill
            loading="eager"
            sizes="400px"
            className="absolute"
          />
        </figure>
        <figure className="relative col-span-1 aspect-square bg-black rounded overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="image"
            fill
            loading="eager"
            sizes="400px"
            className="absolute"
          />
        </figure>
        <figure className="relative col-span-1 aspect-square bg-black rounded overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="image"
            fill
            loading="eager"
            sizes="400px"
            className="absolute"
          />
        </figure>
      </div>
    </section>
  );
}
