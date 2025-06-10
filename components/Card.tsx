"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

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
  priority?: boolean;
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
  priority = false,
}: CardProps) => (
  <li className="dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative flex flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:bg-gray-100 sm:flex-row">
    <div className="relative min-h-[200px] w-full sm:w-1/3">
      <Image
        src={img}
        alt={`Thumbnail for ${title}`}
        fill
        className="rounded-t-lg object-cover sm:rounded-l-lg sm:rounded-r-none"
        sizes="(max-width: 640px) 100vw, 33vw"
        priority={priority}
      />
    </div>
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
