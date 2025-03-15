import React from "react";
import Image from "next/image";
import Link from "next/link";
import FourZeroFour from "styles/assets/404.jpg";

const Custom404 = () => (
  <div className="flex flex-col items-center space-y-2">
    <h1>Whoops!</h1>
    <small>Well this is embarassing...</small>
    <div className="py-4 sm:px-10">
      <Image alt="missing page" src={FourZeroFour} />
    </div>
    <h2>Looks like the page went on vacation</h2>
    <small>
      You can head back to my{" "}
      <Link
        href="/"
        className="dark:border-b-gray-900 dark:hover:border-b-white font-semibold"
      >
        homepage
      </Link>{" "}
      or{" "}
      <Link
        href="/blog"
        className="dark:border-b-gray-900 dark:hover:border-b-white font-semibold"
      >
        blog
      </Link>
    </small>
  </div>
);

export default Custom404;
