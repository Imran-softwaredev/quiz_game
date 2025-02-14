import { JSX } from "react";
import CombinedProviders from "@/providers";
import AppRoutes from "@/routing/AppRoutes";

function App(): JSX.Element {
  return (
    <CombinedProviders>
      <AppRoutes />
    </CombinedProviders>
  );
}

export default App;
