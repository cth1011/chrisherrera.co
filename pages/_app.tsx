import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { MdxComponentsProvider } from "context/mdxContext";
import GlobalStyles from "components/GlobalStyles";
import "tailwindcss/tailwind.css";
import { MyThemeContextProvider } from "store/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MyThemeContextProvider>
      <MdxComponentsProvider>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </MdxComponentsProvider>
    </MyThemeContextProvider>
  );
};

export default MyApp;
