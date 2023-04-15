import { Link, Outlet } from "react-router-dom";

import { IMG } from "../../assets/images";
import { NavLink } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src={IMG.logo} alt="logo" width="80" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Головна</NavLink>
            </li>
            <li>
              <NavLink to="services">Послуги</NavLink>
            </li>
            <li>
              <NavLink to="contacts">Контакти</NavLink>
            </li>
          </ul>
        </nav>
        <button type="button">Замовити послугу</button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
