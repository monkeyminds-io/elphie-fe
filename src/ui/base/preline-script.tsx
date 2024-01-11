"use client";
// =============================================================================
// File Name: ui/base/preline-scripts.tss
// File Description:
// This file contains the Preline Library Scripts https://preline.co/docs/index.html
// =============================================================================
// =============================================================================
// Preline Imports
// =============================================================================
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { IStaticMethods } from "preline/preline";

// =============================================================================
// Preline Globals
// =============================================================================
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

// =============================================================================
// Preline Scrpit Component
// =============================================================================
export const PrelineScript = () => {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
    import("@preline/carousel");
    import("@preline/tooltip");
    import("@preline/dropdown");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }, [path]);

  return null;
}