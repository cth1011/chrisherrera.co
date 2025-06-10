"use client";
import { createContext, ReactElement, useEffect, useState } from "react";

const MyThemeContext = createContext({
  isDarkTheme: false,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: React.ReactNode;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface,
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `false`);
      document!.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(false);
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!,
      );
      isDarkTheme && document!.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function toggleThemeHandler(): void {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!,
    );
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector("body")!.classList.toggle("dark");
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  return (
    <MyThemeContext.Provider
      value={{ isDarkTheme: isDarkTheme, toggleThemeHandler }}
    >
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;
