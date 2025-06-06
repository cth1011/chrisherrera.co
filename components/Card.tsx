import React from "react";
import Link from "next/link";

import { Badge } from "components/ui/badge";
import Button from "components/Button";

import { ArrowRight } from "lucide-react";

type CardProps = {
  img: string;
  href?: string;
  title: string;
  description: string;
  label?: string;
  from: string;
  to: string;
  tags?: string[];
  onBadgeClick: (tag: string) => void;
};

const Card = ({
  title,
  description,
  img,
  from,
  to,
  label = "Read More",
  tags,
  href,
  onBadgeClick,
}: CardProps) => (
  <li className="dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative flex flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:bg-gray-100 sm:flex-row">
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`min-h-[200px] w-full rounded-t-lg bg-cover bg-center bg-no-repeat sm:w-1/3 sm:rounded-l-lg sm:rounded-r-none`}
    />
    <div className="p-5 sm:w-2/3">
      <Link legacyBehavior href={href || "#"}>
        <h5 className="dark:text-white whitespace-nowrap text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
      </Link>
      <small>
        {from} - {to}
      </small>
      {tags && (
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((value, i) => (
            <Badge
              className="cursor-pointer"
              onClick={() => onBadgeClick(value)}
              key={i}
            >
              {value}
            </Badge>
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
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </Link>
      )}
    </div>
  </li>
);

export default Card;
