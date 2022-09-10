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
      <Image src={FourZeroFour} />
    </ImageContainer>

    <h2>Looks like the page went on vacation</h2>
    <small>
      You can head back to our{" "}
      <Link href="/" passHref>
        <strong>
          <a className="nav">homepage</a>
        </strong>
      </Link>{" "}
      or{" "}
      <Link href="/blog" passHref>
        <strong>
          <a className="nav">blog</a>
        </strong>
      </Link>
    </small>
  </Container>
);

export default Custom404;

const Container = tw.div`
    flex flex-col items-center
    ml-auto mr-auto 
    max-h-[400px]


`;
const ImageContainer = tw.div`
    sm:px-10 py-4
`;
