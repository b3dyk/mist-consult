import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Loader from "../Loader";
import * as SC from "./Layout.styled";

const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <SC.Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </SC.Main>

      <Footer />
    </>
  );
};

export default Layout;
