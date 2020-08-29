import "./style.scss";
import { func, string, shape } from "prop-types";
import { useStore } from "./utils";

export const useApp = ({ Component, pageProps }) => {
  const { Footer, Header } = useStore();

  return (
    <main id="app">
      <Header />
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
