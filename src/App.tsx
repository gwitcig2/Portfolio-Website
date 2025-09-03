import './index.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import ProjectList from "./pages/ProjectList.tsx";
import ProjectShowcase from "./pages/ProjectShowcase.tsx";
import Resume from "./pages/Resume.tsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:project" element={<ProjectShowcase />} />
        <Route path="/resume" element={<Resume />} />
    </Routes>
  )
}

export default App
