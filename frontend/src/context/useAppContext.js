import { useContext } from "react";
import { appContext } from "./AppContext";

export const useAppContext = () => {
  return useContext(appContext);
};
