import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { CustomDialogTitle } from "./DialogTitle";
import { DialogBtn } from "../styles";
import { Logout } from "@mui/icons-material";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { defaultUser } from "../constants/defaultUser";
import { showToast } from "../utils";

interface LogoutDialogProps {
  open: boolean;
  onClose: () => void;
}

export function LogoutDialog({ open, onClose }: LogoutDialogProps) {
  const { setUser } = useContext(UserContext);
  const handleLogout = () => {
    setUser(defaultUser);
    onClose();
    showToast("Você foi desconectado com sucesso");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <CustomDialogTitle title="Confirmação de logout" onClose={onClose} icon={<Logout />} />
      <DialogContent>
        Tem certeza de que deseja sair? <b>Suas tarefas não serão salvas.</b>
      </DialogContent>
      <DialogActions>
        <DialogBtn onClick={onClose}>Cancelar</DialogBtn>
        <DialogBtn onClick={handleLogout} color="error">
          <Logout /> &nbsp; Sair
        </DialogBtn>
      </DialogActions>
    </Dialog>
  );
}
