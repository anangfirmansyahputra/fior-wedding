"use clinet";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

type ImageSuspense = {
  src: string;
  alt: string;
  className: string;
};

export default function ImageSuspense({ alt, src, className }: ImageSuspense) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {}, [isLoaded]);

  return isLoaded ? (
    <Image
      src={src}
      alt={alt}
      fill
      onLoad={() => setIsLoaded(true)}
      className={className}
      placeholder="blur"
    />
  ) : (
    <Skeleton className="absolute h-full w-full shadow" />
  );
}
