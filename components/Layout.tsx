import React from "react";
import Header from "./Header";
import Head from "next/head";
import tw from "twin.macro";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Chris Herrera</title>
        <link rel="shortcut icon" href="CH.png" />
      </Head>
      <Container>
        <Header />
        <Body>
          <Main>{children}</Main>
        </Body>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

const Container = tw.div`
  sm:py-12 px-8 sm:px-14
  ml-auto mr-auto lg:max-w-[55%]
`;
const Body = tw.div`mx-auto`;
const Main = tw.main`pt-4 pb-12 `;
