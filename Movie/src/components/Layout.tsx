import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-1 bg-gray-100 mt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
