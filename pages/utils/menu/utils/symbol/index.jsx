import { useSymbolStore } from "./utils";

export const Symbol = () => {
  const { styles, Link } = useSymbolStore();

  return (
    <Link as="menu" href="/[page]">
      <aside className={styles.symbol}>
        <div />
        <div />
        <div />
      </aside>
    </Link>
  );
};
