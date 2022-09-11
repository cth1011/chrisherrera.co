/** @jsxImportSource @emotion/react */
import { FC } from "react";
import tw from "twin.macro";
import Link from "next/link";

const Header: FC = () => {
  return (
    <NavBar>
      <Link href="/" passHref>
        <NavLink className="nav sm:text-xl font-bold">CHRIS HERRERA</NavLink>
      </Link>
      <FlexGrow />
      <Links>
        <Link href="/about" passHref>
          <NavLink className="nav">About</NavLink>
        </Link>
        <Link href="/projects" passHref>
          <NavLink className="nav">Projects</NavLink>
        </Link>
        <Link href="/blog" passHref>
          <NavLink className="nav">Blog</NavLink>
        </Link>
      </Links>
    </NavBar>
  );
};

export default Header;

const NavBar = tw.header`
  flex flex-row items-center 
  pt-5 pb-10 
  tracking-wider whitespace-nowrap
  lg:max-w-[55%] mx-auto
`;

const FlexGrow = tw.div`flex-1 `;
const Links = tw.div`flex-row gap-4 hidden sm:flex`;

const NavLink = tw.a`
dark:border-b-gray-900
 dark:hover:border-b-white`;
