"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Wait for DOM to be ready
    if (typeof window !== "undefined") {
      // Initialize AOS
      AOS.init({
        duration: 1200,
        easing: "ease-out",
        once: false,
        offset: 80,
        delay: 0,
        disable: false,
        startEvent: "DOMContentLoaded",
        mirror: false,
        anchorPlacement: "top-bottom",
      });
      
      // Refresh AOS on window load
      const handleLoad = () => {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      };
      
      // Refresh on resize
      const handleResize = () => {
        AOS.refresh();
      };
      
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }
      
      window.addEventListener("resize", handleResize);
      
      // Also refresh after components mount
      setTimeout(() => {
        AOS.refresh();
      }, 1000);
      
      return () => {
        window.removeEventListener("load", handleLoad);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <>{children}</>;
}

