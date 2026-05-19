import type { Metadata } from "next";

import "@fontsource/manrope";
import "@fontsource/cormorant-garamond";
import "@fontsource/bevan";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aurem",
  description: "Objects shaped by light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}