import { Button, Stack, Typography } from "@mui/material";
import { UpdateRounded } from "@mui/icons-material";
import toast, { type Toast } from "react-hot-toast";

/**
 * Sets up a prompt to notify the user when a new version of the app is available.
 *
 * @param {ServiceWorkerRegistration} r - The service worker registration object.
 * @returns {void}
 */
export const updatePrompt = (r: ServiceWorkerRegistration): void => {
  r.addEventListener("updatefound", () => {
    const newWorker = r.installing;

    if (newWorker) {
      newWorker.addEventListener("statechange", () => {
        if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
          toast(
            (t: Toast) => (
              <Stack spacing={2}>
                <Typography variant="subtitle1" fontWeight={700}>
                  Uma nova versão do aplicativo está disponível. Recarregar para atualizar?
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      newWorker.postMessage({ type: "SKIP_WAITING" });
                      toast.dismiss(t.id);
                    }}
                    startIcon={<UpdateRounded />}
                  >
                    Atualizar
                  </Button>
                  <Button fullWidth variant="outlined" onClick={() => toast.dismiss(t.id)}>
                    Dispensar
                  </Button>
                </Stack>
              </Stack>
            ),
            { duration: Infinity, style: { border: "none" } },
          );
        }
      });
    }
  });
};
