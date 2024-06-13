"use client"

import React, { useEffect, useRef, FC } from 'react';

interface ShadowContentProps {
  htmlContent: string;
}

const ShadowContent: FC<ShadowContentProps> = ({ htmlContent }) => {
  const shadowHostRef = useRef<HTMLDivElement>(null);
  const shadowRootRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (shadowHostRef.current && !shadowRootRef.current) {
      shadowRootRef.current = shadowHostRef.current.attachShadow({ mode: 'open' });
    }

    if (shadowRootRef.current) {
      shadowRootRef.current.innerHTML = htmlContent;
    }
  }, [htmlContent]);

  return <div ref={shadowHostRef}></div>;
};

export default ShadowContent;
