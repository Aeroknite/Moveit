import { useCategoriesStore } from "./utils";

export const Categories = () => {
  const { getCategories, styles } = useCategoriesStore();

  return <ul className={styles.categories}>{getCategories}</ul>;
};
