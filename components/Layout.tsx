import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "components/Footer";
import Header from "components/Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white flex min-h-screen flex-col transition-all duration-1000">
      <Head>
        <title>Chris Herrera</title>
        <link rel="shortcut icon" href="CH.png" />
      </Head>
      <div className="min-w-full flex-grow px-8 lg:container sm:px-14 sm:py-12">
        <Header />
        <main className="mx-auto lg:max-w-2xl">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
