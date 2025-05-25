"use client";

import { useEffect } from "react";

export const BrowserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const handleOpenInBrowser = (currentUrl: string, isAndroid: boolean) => {
      if (isAndroid) {
        const intentUrl = `intent:${currentUrl}#Intent;action=android.intent.action.VIEW;end`;
        window.location.href = intentUrl;
      } else {
        window.open(currentUrl, "_blank", "noopener,noreferrer");
      }
    };

    if (typeof window !== "undefined") {
      const ua = navigator.userAgent;
      const isWebView =
        /wv\)|WebView|FBAV\/|FBAN\/|Instagram|Twitter|LinkedInApp/i.test(ua) ||
        (/iPad|iPhone|iPod/.test(ua) && !/Safari\//i.test(ua)) ||
        (/Android/.test(ua) && !/Chrome\//i.test(ua) && !/Firefox\//i.test(ua));
      if (isWebView) {
        handleOpenInBrowser(window.location.href, /android/i.test(ua));
      }
    }
  }, []);

  return children;
};
