import React from "react";
import tw from "twin.macro";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CardProps = {
  src?: StaticImageData;
  alt?: string;
  href?: string;
  title: string;
  description: string;
  from: string;
  to: string;
};

const Card = ({
  title,
  description,
  alt,
  src,
  from,
  to,
  href = "",
}: CardProps) => (
  <Container>
    {src && (
      <Link href={href}>
        <Img src={src} alt={alt} />
      </Link>
    )}
    <Body>
      <Link href={href}>
        <Title>{title}</Title>
      </Link>
      <small>
        {from} - {to}
      </small>
      <Description>{description}</Description>
      <Link href={href} passHref>
        <Button>
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Button>
      </Link>
    </Body>
  </Container>
);

export default Card;

const Container = tw.div`
    max-w-sm bg-white rounded-lg 
    mr-2 mb-2
    border border-gray-200 shadow-md 
    transition-all
    duration-300
    hover:bg-gray-100
    dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
`;
const Img = tw(Image)`rounded-t-lg`;
const Body = tw.div`p-5`;
const Title = tw.h5`
    text-2xl font-bold tracking-tight text-gray-900 
    dark:text-white
`;

const Description = tw.p`
    my-3 font-normal 
    text-gray-700 dark:text-gray-400
`;

const Button = tw.a`
    inline-flex items-center 
    py-2 px-3 
    text-sm font-medium text-center text-white 
    bg-blue-700 rounded-lg 
    hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
`;
