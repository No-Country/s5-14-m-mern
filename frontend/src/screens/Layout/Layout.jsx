import { Outlet } from "react-router-dom";
import { Footer } from "../../components/PagesComponents/Footer/Footer";
import Header from "../../components/PagesComponents/Header/Header";
import { Navbar } from "../../components/PagesComponents/Navbar/Navbar";
import style from "./layout.module.sass";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <div className={style.layout}>
      <div className={style.navD}>
        <Navbar />
      </div>
      <div className={style.layout_content}>
        <Header />
        <div className={style.outlet}>
          <Outlet />
        </div>
        <div className={style.foot}>
          <Footer />
        </div>
        <div className={style.navM}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
