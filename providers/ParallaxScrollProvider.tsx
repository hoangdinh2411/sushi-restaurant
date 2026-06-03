"use client";
import React, { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
type Props = {
  children: ReactNode;
};

export default function ParallaxScrollProvider({ children }: Props) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
