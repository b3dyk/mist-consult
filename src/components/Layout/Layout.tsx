import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Loader from "../Loader";
import * as SC from "./Layout.styled";
import { useResize } from "../../hooks/useResize";

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

      {!isScreenMobile && <Footer />}
    </>
  );
};

export default Layout;
