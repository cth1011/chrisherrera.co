import { useContext } from "react";
import Link from "next/link";
import MyThemeContext from "store/theme";

const Header = () => {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const isDarkTheme = themeCtx.isDarkTheme;

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  return (
    <header className="mx-auto flex flex-row items-center whitespace-nowrap pb-10 pt-5 tracking-wider lg:max-w-2xl">
      <Link href="/" className="nav font-bold sm:text-xl">
        CHRIS HERRERA
      </Link>

      <div className="flex-1" />

      <div className="hidden flex-row items-center gap-4 sm:flex">
        <Link href="/about" className="nav dark:hover:border-b-white">
          About
        </Link>
        <Link href="/projects" className="nav dark:hover:border-b-white">
          Projects
        </Link>

        <button
          type="button"
          onClick={toggleThemeHandler}
          className="dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none"
        >
          {isDarkTheme ? (
            <svg
              className="h-4 w-4"
              fill="currentColor"
              aria-label="light mode"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              fill="currentColor"
              aria-label="dark mode"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
