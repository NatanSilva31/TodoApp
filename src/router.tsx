import { ReactElement, Suspense, lazy, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Loading } from "./components";
import { SettingsDialog } from "./components/settings/SettingsDialog";

const Home = lazy(() => import("./pages/Home"));
const TaskDetails = lazy(() => import("./pages/TaskDetails"));
const SharePage = lazy(() => import("./pages/Share"));
const AddTask = lazy(() => import("./pages/AddTask"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const Transfer = lazy(() => import("./pages/Transfer"));
const Categories = lazy(() => import("./pages/Categories"));
const Purge = lazy(() => import("./pages/Purge"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppRouter = (): ReactElement => {
  const [showSettings, setShowSettings] = useState(false);
  const previousPath = useRef<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const isSettings = hash.startsWith("#settings/");

    if (isSettings) {
      if (!previousPath.current) {
        previousPath.current = location.pathname + location.search;
      }
      setShowSettings(true);
    }
  }, []); // somente na montagem inicial

  useEffect(() => {
    const handleHashChange = () => {
      const isSettings = window.location.hash.startsWith("#settings/");
      if (isSettings) {
        if (!previousPath.current) {
          previousPath.current = location.pathname + location.search;
        }
        setShowSettings(true);
      } else {
        setShowSettings(false);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [location.pathname]);

  const closeSettings = () => {
    // 1. FECHA o modal imediatamente
    setShowSettings(false);

    // 2. Aguarda um frame para limpar o hash e evitar o 404 blink
    setTimeout(() => {
      const previous = previousPath.current || "/";
      previousPath.current = "";

      // 3. Navega de volta
      if (location.pathname !== previous) {
        navigate(previous, { replace: true });
      }

      // 4. Limpa o hash manualmente
      history.replaceState(null, "", previous);
    }, 0);
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/share" element={<SharePage />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/purge" element={<Purge />} />
          {/* Evita que 404 seja processado enquanto o modal está ativo */}
          {!showSettings && <Route path="*" element={<NotFound />} />}
        </Routes>
      </Suspense>

      <SettingsDialog open={showSettings} onClose={closeSettings} />
    </>
  );
};

export default AppRouter;
