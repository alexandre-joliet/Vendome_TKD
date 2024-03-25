import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vendôme Taekwondo Club",
  description:
    "Bienvenue au Taekwondo Club de Vendôme (41) ! Notre club offre un environnement dynamique et inclusif pour les pratiquants de tous âges et de tous niveaux. Que vous soyez un débutant curieux ou un expert chevronné, tout est mis en oeuvre pour vous guider à travers chaque étape de votre apprentissage de ce noble art martial coréen.",
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
