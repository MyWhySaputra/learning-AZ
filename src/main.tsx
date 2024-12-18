import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { LoadingProvider } from "./contex/loading.tsx";
import { MantineProvider } from "@mantine/core";
import App from "./App.tsx";
import "./language.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoadingProvider>
      <Suspense>
        <MantineProvider>
          <App />
        </MantineProvider>
      </Suspense>
    </LoadingProvider>
  </StrictMode>
);
