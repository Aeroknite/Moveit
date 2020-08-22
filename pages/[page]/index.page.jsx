import { useStore } from "../utils";

export const usePage = () => {
  const {
    useMenuStore: { Categories },
  } = useStore();

  return <Categories />;
};

export default usePage;
