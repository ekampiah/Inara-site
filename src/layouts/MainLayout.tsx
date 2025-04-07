import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col bg-[url('/assets/double-lady-facing-right.png')] bg-cover bg-center min-h-screen">
      <NavBar />
      <div className="flex-grow xl:max-w-[80%] xl:mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
