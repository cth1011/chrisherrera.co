import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { MdxComponentsProvider } from "context/mdxContext";
import GlobalStyles from "components/GlobalStyles";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MdxComponentsProvider>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </MdxComponentsProvider>
  );
};

export default MyApp;
