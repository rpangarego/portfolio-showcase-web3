import type { Metadata } from "next";
import { Anonymous_Pro } from "@next/font/google";
import "./globals.css";

const anonymousPro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Showcase v2",
  description: "Developed by ropangarego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anonymousPro.className}>{children}</body>
    </html>
  );
}
