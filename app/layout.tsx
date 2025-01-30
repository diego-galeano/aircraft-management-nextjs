import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Zulu Airlines Solutions",
  description: "Zulu es una aplicación para la gestión de tus aeronaves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="home">{children}</body>
    </html>
  );
}
