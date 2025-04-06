import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col bg-[url('/assets/double-lady-facing-right.png')] bg-cover bg-center h-screen">
      <NavBar />
      <div className="h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
