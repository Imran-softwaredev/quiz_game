import { createContext } from "react";

export const StateContext = createContext<StateContextValue | undefined>(
  undefined,
);

export default StateContext;
