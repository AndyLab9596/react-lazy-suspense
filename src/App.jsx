import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
// import Admin from "./components/Admin"
import SkeletonAdmin from "./components/skeletons/SkeletonAdmin";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

import { lazy, Suspense } from "react";

const Admin = lazy(() => import("./components/Admin"));

function App() {
  const naviate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="admin"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => naviate("/")}
            >
              <Suspense fallback={<SkeletonAdmin />}>
                <Admin />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
