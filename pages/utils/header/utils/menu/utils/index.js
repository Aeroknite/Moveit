import { useState } from "react";
import styles from "./style.module.scss";
import { setDisplay } from "../../../..";

const categories = [
  //   "Account",
  "Login",
  "Pricing",
  //   "Payment",
  "Collection",
  "Lookup Storage",
];

export function getCategories() {
  return categories.map((category) => (
    <li key={category} className={styles.category}>
      {category}
    </li>
  ));
}

export const useMenuStore = () => {
  const [isFocus, setFocus] = useState(false);

  return {
    styles,
    getCategories: getCategories(),
    isFocus,
    setDisplay: () => setDisplay({ setFocus }),
  };
};
