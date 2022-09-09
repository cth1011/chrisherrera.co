/** @jsxImportSource @emotion/react */
import { FC } from "react";
import tw from "twin.macro";
import Link from "next/link";

const Header: FC = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <NavMain className="nav">CHRIS HERRERA</NavMain>
      </Link>
      <FlexGrow />
      <Links>
        <Link href="/about" passHref>
          <a className="nav">About</a>
        </Link>
        <Link href="/projects" passHref>
          <a className="nav">Projects</a>
        </Link>
        <Link href="/blog" passHref>
          <a className="nav">Blog</a>
        </Link>
      </Links>
    </Container>
  );
};

export default Header;

const Container = tw.div`
flex flex-row items-center 
pt-5 pb-10 
tracking-wider whitespace-nowrap
`;

const FlexGrow = tw.div`flex-1 `;
const Links = tw.div`flex-row gap-4 hidden sm:flex`;

const NavMain = tw.a`text-xl font-bold`;
