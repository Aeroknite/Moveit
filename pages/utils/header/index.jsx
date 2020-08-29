import { useHeaderStore } from "./utils";

export const useHeader = () => {
  const { Menu, User } = useHeaderStore();

  return (
    <main>
      <Menu />
      <User />
    </main>
  );
};

export const Header = useHeader;
