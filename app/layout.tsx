import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vendôme Taekwondo Club - Le club de Taekwondo de la ville de Vendôme",
  description:
    "Le club de Taekwondo de la ville de Vendôme offre un environnement dynamique et inclusif pour les pratiquants de tous âges et de tous niveaux. Que vous soyez un expert ou débutant dans le monde des arts martiaux ou des sports de combat, rejoignez-nous !",
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
