import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Loader from "../Loader";
import ArrowUp from "../ArrowUp";
import Modal from "../Modal";
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

      <Modal />
    </>
  );
};

export default Layout;
