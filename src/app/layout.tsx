import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Addyson Campbell | Chemical Engineer",
  description: "Texas A&M chemical engineering student with experience in plant engineering, process optimization, power generation, and R&D.",
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
