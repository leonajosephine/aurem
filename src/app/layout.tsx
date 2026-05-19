import type { Metadata } from "next";

import "@fontsource/inter";
import "@fontsource/cormorant-garamond";

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