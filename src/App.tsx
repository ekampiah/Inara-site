import Home from "./pages/Home.tsx";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider, rem } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HowItWorks from "./pages/HowItWorks.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import Plans from "./pages/Plans.tsx";
import Events from "./pages/Events.tsx";

const theme = createTheme({
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  fontFamily: "Poppins, sans-serif",
  fontSizes: {
    xs: rem(9),
    sm: rem(12),
    md: rem(15),
    lg: rem(30),
    xl: rem(60),
  },
  colors: {
    inara: [
      "#fdf0ec",
      "#f6ded7",
      "#f0baa9",
      "#ec9377",
      "#e8724d",
      "#e65e33",
      "#e65325",
      "#cc441a",
      "#b63b15",
      "#9f300e",
    ],
  },
  primaryColor: "inara",
  primaryShade: 8,
});

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/events" element={<Events />} />
      </Route>
    </Routes>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <MainContent />
      </MantineProvider>
    </BrowserRouter>
  );
}
