import React from "react";
import Image from "next/image";
import Link from "next/link";
import tw from "twin.macro";

import FourZeroFour from "styles/assets/404.jpg";

const Custom404 = () => (
  <Container>
    <h1>Whoops!</h1>
    <small>Well this is embarassing...</small>
    <ImageContainer>
      <Image alt="missing page" src={FourZeroFour} />
    </ImageContainer>
    <h2>Looks like the page went on vacation</h2>
    <small>
      You can head back to my{" "}
      <Link legacyBehavior href="/" passHref>
        <NavLink className="nav">homepage</NavLink>
      </Link>{" "}
      or{" "}
      <Link legacyBehavior href="/blog" passHref>
        <NavLink className="nav">blog</NavLink>
      </Link>
    </small>
  </Container>
);

export default Custom404;

const Container = tw.div`
    flex flex-col items-center
    space-y-2
`;
const ImageContainer = tw.div`
    sm:px-10 py-4
`;

const NavLink = tw.a`
font-semibold
dark:border-b-gray-900
 dark:hover:border-b-white
`;
