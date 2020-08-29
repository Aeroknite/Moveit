import styles from "./style.module.scss";
import { Footer } from "./footer";
import { useApp } from "../_app.page";
import { useHome } from "../index.page";
import { Header } from "./header";

export function setDisplay({ setFocus }) {
  return setFocus((isFocus) => !isFocus);
}

export const useStore = () => {
  return {
    Footer,
    Header,
    useApp,
    useHome,
    styles,
  };
};
