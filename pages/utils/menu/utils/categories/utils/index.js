import styles from "./style.module.scss";

export * from "..";

const categories = [
  //   "Account",
  "Login/Logout",
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

export const useCategoriesStore = () => {
  return { styles, getCategories: getCategories() };
};
