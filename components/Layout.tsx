import React from "react";
import Header from "./Header";
import tw from "twin.macro";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Body>
        <Main>{children}</Main>
      </Body>
    </Container>
  );
};

export default Layout;

const Container = tw.div`py-12 px-14 ml-auto mr-auto lg:max-w-[55%]`;
const Body = tw.div`mx-auto`;
const Main = tw.main`pt-4 pb-12 `;
