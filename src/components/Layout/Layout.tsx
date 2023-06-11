import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import Header from "../Header";
import Footer from "../Footer";
import Loader from "../Loader";
import ArrowUp from "../ArrowUp";
import { useResize } from "../../hooks/useResize";
import * as SC from "./Layout.styled";

const Layout: React.FC = () => {
  const { isScreenMobile } = useResize();

  return (
    <>
      <Header />

      <SC.Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </SC.Main>

      <ArrowUp />

      {!isScreenMobile && <Footer />}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={3}
      />
    </>
  );
};

export default Layout;
