import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../Footer";
import { useEffect, useState, useCallback } from "react";

export default function MainLayout() {
  const [isVisible, setIsVisible] = useState(true);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle pending navigation after fade-out
  useEffect(() => {
    if (pendingPath && pendingPath !== location.pathname) {
      const timeout = setTimeout(() => {
        navigate(pendingPath);
        setPendingPath(null);
      }, 300); // Fade-out duration
      return () => clearTimeout(timeout);
    }
  }, [pendingPath, navigate, location.pathname]);

  // Initial fade-in and route change handling
  useEffect(() => {
    // Fade in when route has changed
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Export navigation handler for link components to use
  const handleLinkClick = useCallback(
    (to: string, e?: React.MouseEvent) => {
      if (e) e.preventDefault();
      if (to !== location.pathname) {
        setIsVisible(false);
        setPendingPath(to);
      }
    },
    [location.pathname]
  );

  return (
    <div className="flex flex-col bg-[url('/assets/double-lady-facing-right.png')] bg-cover bg-center min-h-screen">
      <NavBar onNavigate={handleLinkClick} />
      <div
        className={`flex-grow xl:max-w-[80%] xl:mx-auto transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Outlet />
      </div>
      <Footer onNavigate={handleLinkClick} />
    </div>
  );
}
