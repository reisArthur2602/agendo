import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { KindeAuthProvider } from "./providers/kinde";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agendo - Feito para qualquer negócio que trabalha com hora marcada",
  description:
    "Com o Agendo, você cria sua agenda online em minutos, compartilha um link com seus clientes e deixa que eles escolham o melhor horário — direto do site ou pelo WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <KindeAuthProvider>
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>{children}</body>
      </html>
    </KindeAuthProvider>
  );
}
