import { useContext } from "react";
import StateContext from "@context/StateContext";

const useGameState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useGameState must be used within a StateProvider");
  }
  return context;
};

export default useGameState;
