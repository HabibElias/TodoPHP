import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="overflow-clip bg-linear-300 from-[#dbeafe8f] to-[#bbc8da28] dark:bg-linear-0 dark:from-[#202020a1] dark:to-[#000000]">
      <div className="relative mx-auto max-h-max min-h-[100vh] p-10 md:w-[70%] md:min-w-max">
        <NavBar />
        <div className="my-12">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
