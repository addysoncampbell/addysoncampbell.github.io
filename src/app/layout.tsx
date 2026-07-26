import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Addyson Campbell | Chemical Engineer",
  description: "Chemical engineering portfolio focused on process design, optimization, and safety.",
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
