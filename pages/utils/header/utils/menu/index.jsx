import { useMenuStore } from "./utils";

export const useMenu = () => {
  const { styles, setDisplay, isFocus, getCategories } = useMenuStore();

  return (
    <main className={styles.menu}>
      <button type="button" className={styles.symbol} onClick={setDisplay}>
        <div />
        <div />
        <div />
      </button>

      {/* {isFocus && ( */}
      <ul className={`${styles.categories} ${!isFocus && styles.notFocus}`}>
        {getCategories}
      </ul>
      {/* )} */}
    </main>
  );
};

export const Menu = useMenu;
