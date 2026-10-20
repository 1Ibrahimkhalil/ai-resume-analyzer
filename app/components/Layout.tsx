import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />

        <Outlet  />
      </main>
    </>
  );
};

export default Layout;
