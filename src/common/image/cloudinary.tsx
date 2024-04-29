"use client";

import { CldImage as CldImageDefault } from "next-cloudinary";

import type { CldImageProps } from "next-cloudinary";

export const CldImage = (props: CldImageProps) => {
  return <CldImageDefault {...props} />;
};
