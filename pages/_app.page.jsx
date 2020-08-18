import "./style.scss";
import { func, string, shape } from "prop-types";
import { useStore, Symbol, Footer } from "./utils";

export const useApp = ({ Component, pageProps }) => {
  useStore();

  return (
    <main id="app">
      <Symbol />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};

useApp.propTypes = {
  Component: func.isRequired,
  pageProps: shape({ root: string }).isRequired,
};

export default useApp;
