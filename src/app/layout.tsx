import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Revelô Produções",
  description: "Revelamos aquilo que se é incapaz de enxergar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "font-body antialiased tracking-widest bg-[#181818] text-white"
        }
      >
        <Header />
        <main className="flex flex-col items-center mx-auto max-w-full min-h-screen ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
