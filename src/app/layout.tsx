import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Day - Club IT",
  description: "L'innovation au cœur de la jeunesse malienne. Rejoignez l'événement technologique incontournable du Club IT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
