"use client";

import dynamic from "next/dynamic";

// Dynamically import decorative/client-only components
const CursorTrail = dynamic(() => import("@/components/CursorTrail"), {
  ssr: false,
});

const BottomDock = dynamic(() => import("@/components/BottomDock"), {
  ssr: false,
});

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CursorTrail />
      {children}
      <BottomDock />
    </>
  );
}
