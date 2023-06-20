import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const Layout = lazy(() => import("./components/Layout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
