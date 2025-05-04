import { ReactElement, Suspense, lazy } from "react";
import { Route, Routes, HashRouter } from "react-router-dom"; // Alteração para HashRouter
import { Loading } from "./components";

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
  return (
    <HashRouter> {/* Alteração para HashRouter */}
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default AppRouter;
