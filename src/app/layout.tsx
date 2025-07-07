import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { KindeAuthProvider } from "./providers/kinde";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={`${inter.className} flex min-h-screen antialiased`}>
          <Toaster expand richColors position="top-center" />
          <main className="grid flex-1">{children}</main>
        </body>
      </html>
    </KindeAuthProvider>
  );
}
