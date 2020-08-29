import { useState } from "react";
import styles from "./style.module.scss";
import { setDisplay } from "../../../..";

export const useUserStore = () => {
  const [isUser, setUser] = useState(false);

  return { styles, isUser, setUser: () => setDisplay({ setFocus: setUser }) };
};
