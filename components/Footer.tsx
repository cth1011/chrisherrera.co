import { cn } from "lib/utils";
import Link from "next/link";

const Footer = () => (
  <footer
    className={cn(
      "mt-8 min-w-full border-t-2 border-gray-200 px-8 py-8 lg:container",
      "dark:border-gray-700 dark:bg-gray-800 sm:px-14 sm:py-12",
    )}
  >
    <div className="mx-auto lg:max-w-2xl">
      <div className="grid grid-cols-1 gap-8 pt-6 md:flex md:justify-between md:pt-8">
        <Link className="flex items-center" href="/">
          <span
            className={cn(
              "self-center whitespace-nowrap font-semibold tracking-widest",
              "dark:text-white dark:hover:border-b-white sm:text-xl",
            )}
          >
            CHRIS HERRERA
          </span>
        </Link>

        <div className={cn("pt-6 md:flex md:justify-between")}>
          <small className={cn("md:w-1/2", "dark:text-white")}>
            Thanks for reading! I strive to write as much as I can during my
            freetime. If you want to reach out, you can send me an email at
            cth0910@gmail.com.
          </small>
          <div className={cn("grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-6")}>
            <div>
              <h2
                className={cn(
                  "mb-6 text-sm font-semibold uppercase text-gray-900",
                  "dark:text-white",
                )}
              >
                Links
              </h2>
              <ul className={cn("text-gray-600", "dark:text-gray-400")}>
                <li className="mb-4">
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr
        className={cn(
          "my-6 border-gray-200 sm:mx-auto lg:my-8",
          "dark:border-gray-700",
        )}
      />
      <div className={cn("sm:flex sm:items-center sm:justify-between")}>
        <span
          className={cn(
            "text-sm text-gray-500 sm:text-center",
            "dark:text-gray-400",
          )}
        >
          © 2020, Built by Chris
        </span>
        <div className={cn("mt-4 flex space-x-6 sm:mt-0 sm:justify-center")}>
          <Link
            className={cn(
              "text-gray-500 hover:text-gray-900",
              "dark:hover:text-white",
            )}
            href="https://github.com/cth1011"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </Link>
          <Link
            className={cn(
              "text-gray-500 hover:text-gray-900",
              "dark:hover:text-white",
            )}
            aria-label="linked in profile"
            href="https://www.linkedin.com/in/christopher-herrera-6762a9bb/"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
