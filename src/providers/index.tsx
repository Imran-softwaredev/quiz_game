import React, { ReactNode } from "react";
import { GameProvider } from "@/providers/GameProvider";

interface CombinedProvidersProps {
  children: ReactNode;
}

const providers = [GameProvider];

const CombinedProviders: React.FC<CombinedProvidersProps> = ({ children }) => {
  return providers.reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
};

export default CombinedProviders;
