import React from "react";
import Link from "next/link";

import Badge from "components/Badge";
import Button from "components/Button";

type CardProps = {
  img?: string;
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
  img = "bg-covid",
  from,
  to,
  label = "Read More",
  tags,
  href,
}: CardProps) => (
  <div className="dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-2 mr-2 max-w-md rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:bg-gray-100">
    <div
      className={`h-[200px] w-full rounded-t-lg ${img} bg-cover bg-center bg-no-repeat`}
    />
    <div className="p-5">
      <Link legacyBehavior href={href || "#"}>
        <h5 className="dark:text-white whitespace-nowrap text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
      </Link>
      <small>
        {from} - {to}
      </small>
      {tags && (
        <div className="pt-2">
          {tags.map((value, i) => (
            <Badge key={i}>{value}</Badge>
          ))}
        </div>
      )}
      <p className="dark:text-gray-400 my-3 min-h-[180px] font-normal text-gray-700">
        {description}
      </p>
      {href && (
        <Link legacyBehavior href={href} passHref>
          <a>
            <Button>
              {label}
              <svg
                aria-hidden="true"
                className="-mr-1 ml-2 h-4 w-4"
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
      )}
    </div>
  </div>
);

export default Card;
