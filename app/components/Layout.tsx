
import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <Outlet />
    </main>
  );
}
