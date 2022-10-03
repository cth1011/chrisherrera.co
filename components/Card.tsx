import React from "react";
import tw, { TwStyle } from "twin.macro";

import Link from "next/link";

import Badge from "components/Badge";
import Button from "components/Button";

type CardProps = {
  img?: any;
  href?: string;
  title: string;
  description: string;
  label?: string;
  from: string;
  to: string;
  tags?: string[];
};

const Card = ({
  title,
  description,
  img = tw`bg-covid`,
  from,
  to,
  label = "Read More",
  tags,
  href = "/",
}: CardProps) => (
  <Container>
    {/* {src && (
      <Link href={href}>
        <Img src={src} alt={alt} placeholder="blur" />
      </Link>
    )} */}
    <ImgContainer className={img} />
    <Body>
      <Link href={href}>
        <Title>{title}</Title>
      </Link>
      <small>
        {from} - {to}
      </small>
      {tags && (
        <Tags>
          {tags.map((value, i) => (
            <Badge key={i}>{value}</Badge>
          ))}
        </Tags>
      )}
      <Description>{description}</Description>
      <Link href={href} passHref>
        <a>
          <Button>
            {label}
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </a>
      </Link>
    </Body>
  </Container>
);

export default Card;

const Container = tw.div`
    max-w-md bg-white rounded-lg 
    mr-2 mb-2
    border border-gray-200 shadow-md 
    transition-all
    duration-300
    hover:bg-gray-100
    dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
`;
const ImgContainer = tw.div`
w-full h-[200px]
rounded-t-lg
bg-cover
bg-center
bg-no-repeat `;
const Body = tw.div`p-5`;
const Title = tw.h5`
    text-2xl font-bold tracking-tight text-gray-900 whitespace-nowrap
    dark:text-white
`;

const Tags = tw.div`pt-2`;

const Description = tw.p`
    my-3 font-normal min-h-[180px]
    text-gray-700 dark:text-gray-400
`;
