"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ezstandalone: {
      cmd: Array<() => void>;
      showAds: (...ids: number[]) => void;
      defined: boolean;
    };
  }
}

type EzoicAdsLoaderProps = {
  placementIds: number[];
};

export default function EzoicAdsLoader({ placementIds }: EzoicAdsLoaderProps) {
  useEffect(() => {
    if (typeof window === "undefined" || !window.ezstandalone) return;
    window.ezstandalone.cmd.push(function () {
      window.ezstandalone.showAds(...placementIds);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
