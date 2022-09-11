import React, { ReactNode } from "react";
import Head from "next/head";
import tw from "twin.macro";

import Footer from "components/Footer";
import Header from "components/Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Page>
      <Head>
        <title>Chris Herrera</title>
        <link rel="shortcut icon" href="CH.png" />
      </Head>
      <Section>
        <Header />
        <Main>{children}</Main>
      </Section>
      <Footer />
    </Page>
  );
};

export default Layout;

const Page = tw.div`
flex flex-col min-h-screen
transition-all duration-1000
dark:bg-gray-900  dark:text-white
`;
const Section = tw.div`
  sm:py-12 px-8 sm:px-14
  lg:container min-w-full
  flex-grow
`;

const Main = tw.main`
lg:max-w-[55%] mx-auto
`;
