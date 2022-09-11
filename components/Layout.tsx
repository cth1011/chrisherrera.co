import React, { ReactNode, useState } from "react";
import Head from "next/head";
import tw from "twin.macro";

import Footer from "components/Footer";
import Header from "components/Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [IsDarkMode, setDarkMode] = useState<boolean>(true);
  return (
    <Container className={IsDarkMode ? "dark" : ""}>
      <Head>
        <title>Chris Herrera</title>
        <link rel="shortcut icon" href="CH.png" />
      </Head>
      <Section>
        <Header />
        <Main>{children}</Main>
      </Section>
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = tw.div`
flex flex-col min-h-screen
transition-all duration-1000
`;
const Section = tw.div`
  sm:py-12 px-8 sm:px-14
  lg:container min-w-full
  flex-grow
  dark:bg-gray-900 dark:text-white
`;

const Main = tw.main`
lg:max-w-[55%] mx-auto
dark:text-white
`;
