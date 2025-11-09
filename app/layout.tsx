import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Eco",
  description: "Development Ecosystem",
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

