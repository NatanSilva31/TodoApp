import { Alert, AlertTitle, Dialog, DialogActions, DialogContent } from "@mui/material";
import { DialogBtn } from "../styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import type { Task } from "../types/user";
import { generateUUID, isHexColor, showToast } from "../utils";
import { UserContext } from "../contexts/UserContext";
import { AddTaskRounded, DoNotDisturbAltRounded, ErrorRounded } from "@mui/icons-material";
import { URL_REGEX, USER_NAME_MAX_LENGTH } from "../constants";
import { CustomDialogTitle } from "../components";
import { TaskItem } from "../components/tasks/TaskItem";
import Home from "./Home";
import LZString from "lz-string";
//FIXME: make everything type-safe
const SharePage = () => {
  const { user, setUser } = useContext(UserContext);
  const n = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskParam = queryParams.get("task");
  const userNameParam = queryParams.get("userName");

  const [taskData, setTaskData] = useState<Task | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorDetails, setErrorDetails] = useState<string | undefined>();

  useEffect(() => {
    const handleTaskData = (decodedTask: string) => {
      const task: Task = { ...(JSON.parse(decodedTask) as Task), id: generateUUID() };

      if (
        !isHexColor(task.color) ||
        (task.category && task.category.some((cat) => !isHexColor(cat.color)))
      ) {
        setError(true);
        setErrorDetails("Formato de cor de tarefa ou categoria inválido.");
        return;
      }

      setTaskData(task);
    };

    if (taskParam) {
      try {
        let decodedTask = decodeURIComponent(taskParam);

        if (decodedTask.startsWith("{") || decodedTask.startsWith("[")) {
          // old JSON format
          handleTaskData(decodedTask);
        } else {
          // new compressed format
          decodedTask = LZString.decompressFromEncodedURIComponent(decodedTask);
          if (!decodedTask) throw new Error("Falha na descompactação.");
          handleTaskData(decodedTask);
        }
      } catch (error) {
        console.error("Erro ao decodificar os dados da tarefa:", error);
        setError(true);
        setErrorDetails("Falha ao decodificar os dados da tarefa. O link pode estar corrompido. " + error);
      }
    } else {
      setError(true);
      setErrorDetails("Nenhum dado de tarefa encontrado no link.");
    }

    if (userNameParam) {
      const decodedUserName = decodeURIComponent(userNameParam);
      if (decodedUserName.length > USER_NAME_MAX_LENGTH) {
        setError(true);
        setErrorDetails("O nome de usuário é muito longo.");
      }
      setUserName(decodedUserName);
    }
  }, [taskParam, userNameParam]);

  useEffect(() => {
    document.title = `Todo App - Tarefa Recebida ${taskData ? "(" + taskData.name + ")" : ""}`;
  }, [taskData]);

  const handleAddTask = () => {
    if (taskData) {
      // Add missing categories to user.categories
      const updatedCategories = [...user.categories];

      if (taskData.category) {
        taskData.category.forEach((taskCategory) => {
          const existingCategoryIndex = updatedCategories.findIndex(
            (cat) => cat.id === taskCategory.id,
          );

          if (existingCategoryIndex !== -1) {
            // If category with the same ID exists, replace it with the new category
            updatedCategories[existingCategoryIndex] = taskCategory;
          } else {
            // Otherwise, add the new category to the array
            updatedCategories.push(taskCategory);
          }
        });
      }

      setUser((prevUser) => ({
        ...prevUser,
        categories: updatedCategories,
        tasks: [
          ...prevUser.tasks.filter(Boolean),
          {
            ...taskData,
            id: generateUUID(),
            sharedBy: userName,
          },
        ],
      }));

      n("/");
      showToast(
        <div>
          Tarefa compartilhada adicionada - <b translate="no">{taskData.name}</b>
        </div>,
        {
          icon: <AddTaskRounded />,
        },
      );
    }
  };

  return (
    <>
      <Home />
      <Dialog
        open
        fullWidth
        slotProps={{
          paper: {
            style: {
              borderRadius: "24px",
              padding: " 10px 6px",
              width: "100% !important",
            },
          },
        }}
      >
        {!error && taskData ? (
          <>
            <CustomDialogTitle
              title="Tarefa recebida"
              subTitle="Agora você pode incluí-la em sua lista."
              icon={<AddTaskRounded />}
            />
            <DialogContent>
              <p style={{ fontSize: "16px", marginLeft: "6px" }}>
                <b translate={userName === "User" ? "yes" : "no"}>{userName}</b> compartilhou uma tarefa para você.
              </p>
              <TaskItem
                task={taskData}
                features={{
                  enableLinks: false,
                  enableGlow: false,
                }}
              />
              {taskData && taskData.description && taskData.description.match(URL_REGEX) && (
                <Alert sx={{ mt: "20px" }} severity="warning">
                  <AlertTitle>Esta tarefa contém os seguintes links:</AlertTitle>{" "}
                  {(() => {
                    const links = taskData.description.match(URL_REGEX)?.map((link) => link);
                    if (links) {
                      const listFormatter = new Intl.ListFormat("en-US", {
                        style: "long",
                        type: "conjunction",
                      });
                      return (
                        <span style={{ wordBreak: "break-all" }}>
                          {listFormatter.format(links)}
                        </span>
                      );
                    }
                    return null;
                  })()}
                </Alert>
              )}
            </DialogContent>
            <DialogActions>
              <DialogBtn color="error" onClick={() => n("/")}>
                <DoNotDisturbAltRounded /> &nbsp; Recusar
              </DialogBtn>
              <DialogBtn
                onClick={() => {
                  handleAddTask();
                  n("/");
                }}
              >
                <AddTaskRounded /> &nbsp; Adicionar tarefa
              </DialogBtn>
            </DialogActions>
          </>
        ) : (
          <>
            <CustomDialogTitle
              title="Falha ao receber a tarefa"
              subTitle="Esta tarefa não pode ser processada."
              onClose={() => n("/")}
              icon={<ErrorRounded />}
            />
            <DialogContent>
              <Alert severity="error">
                <AlertTitle>Erro: falha ao processar a tarefa</AlertTitle>
                {errorDetails}
              </Alert>
            </DialogContent>
            <DialogActions>
              <DialogBtn onClick={() => n("/")}>Fechar</DialogBtn>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default SharePage;
