import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import NoPage from "./pages/no-page";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProjectsPage />} path="/projects">
        <Route element={<ProjectsPage />} path="/projects/:id" />
      </Route>
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<NoPage />} path="*" />
    </Routes>
  );
}

export default App;
