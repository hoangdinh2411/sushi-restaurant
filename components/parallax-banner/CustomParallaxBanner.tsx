"use client";

import { ParallaxBanner } from "react-scroll-parallax";

type Props = {
  image: string;
  className?: string;
};

export default function CustomParallaxBanner({ image, className = "" }: Props) {
  return (
    <ParallaxBanner
      layers={[{ image: image || "/images/demo.webp", speed: -15 }]}
      className={className}
    />
  );
}
