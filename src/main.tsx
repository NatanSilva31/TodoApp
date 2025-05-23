import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { initColors } from "ntc-ts";
import { ORIGINAL_COLORS } from "ntc-ts";
import { UserContextProvider } from "./contexts/UserProvider.tsx";
import { registerSW } from "virtual:pwa-register";
import { showToast } from "./utils/showToast.tsx";
import { updatePrompt } from "./utils/updatePrompt.tsx";
import { CircularProgress } from "@mui/material";
import toast from "react-hot-toast";

// initialize ntc colors
initColors(ORIGINAL_COLORS);

const offlinePreparationCount = parseInt(
  localStorage.getItem("offlinePreparationCount") || "0",
  10,
);

if (offlinePreparationCount < 3 && !localStorage.getItem("initialCachingComplete")) {
  showToast("Preparando o aplicativo para uso offline...", {
    duration: 3000,
    type: "blank",
    id: "initial-offline-preparation",
    icon: <CircularProgress size={20} thickness={4} />,
  });

  localStorage.setItem("offlinePreparationCount", (offlinePreparationCount + 1).toString());
}//

registerSW({
  onRegistered(r) {
    if (r) {
      updatePrompt(r);
    }
  },
  onOfflineReady() {
    toast.dismiss("initial-offline-preparation");

    if (!localStorage.getItem("initialCachingComplete")) {
      showToast("O aplicativo está pronto para trabalhar offline.", { type: "success" });
      localStorage.setItem("initialCachingComplete", "true");
    }
  },
});

navigator.serviceWorker?.addEventListener("controllerchange", () => {
  window.location.reload();
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <HashRouter> 
        <App />
      </HashRouter>
    </UserContextProvider>
  </React.StrictMode>,
);
