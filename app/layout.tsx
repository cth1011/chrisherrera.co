import React from "react";
import { Montserrat } from "next/font/google";
import { MyThemeContextProvider } from "store/theme";
import { MdxComponentsProvider } from "context/mdxContext";
import Footer from "components/Footer";
import Header from "components/Header";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Chris Herrera",
  description:
    "The personal blog and portfolio of Chris Herrera, a senior software engineer.",
  icons: {
    shortcut: "/CH.png",
  },
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  "use client";
  return (
    <MyThemeContextProvider>
      <MdxComponentsProvider>{children}</MdxComponentsProvider>
    </MyThemeContextProvider>
  );
};
const montserrat = Montserrat({
  subsets: ["latin"], // Specify which subsets you need
  display: "swap", // This is the default and best for performance
  variable: "--font-montserrat", // Optional: for use with Tailwind CSS
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head></head>
      <body className="dark:bg-gray-900 dark:text-white flex min-h-screen flex-col transition-all duration-1000">
        <Providers>
          <div className="min-w-full flex-grow px-8 lg:container sm:px-14 sm:py-12">
            <Header />
            <main className="mx-auto lg:max-w-2xl">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
