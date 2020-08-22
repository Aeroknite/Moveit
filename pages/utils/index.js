// import dynamic from "next/dynamic";
import { Footer } from "./footer";
import { useMenuStore } from "./menu/utils";
import { useApp } from "../_app.page";
import { useHome } from "../index.page";
import styles from "./style.module.scss";

export const useStore = () => {
  return {
    Footer,
    useMenuStore: useMenuStore(),
    useApp,
    useHome,
    styles,
  };
};
