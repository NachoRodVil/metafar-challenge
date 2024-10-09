import Header from "@/components/header";
import "./globals.css";
import { QueryProvider } from "./queryProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Metafar Challenge',
  description: 'Challenge para Metafar hecho por Ignacio Rodriguez Villasuso.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-lilac">
          <Header></Header>
          <div className="px-16">
            <QueryProvider>
              {children}
            </QueryProvider>
          </div>
      </body>
    </html>
  );
}
