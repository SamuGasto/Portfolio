import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import AnalisisDeDatosPage from "@/pages/analisisdatos";
import AplicacionesPage from "@/pages/aplicaciones";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<AnalisisDeDatosPage />} path="/projects/analisis" />
      <Route element={<AplicacionesPage />} path="/projects/apps" />
    </Routes>
  );
}

export default App;
