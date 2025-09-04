import './index.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from "./pageComponents/LandingPage.tsx";
import AboutMe from "./pageComponents/AboutMe.tsx";
import ProjectList from "./pageComponents/ProjectList.tsx";
import ProjectShowcase from "./pageComponents/ProjectShowcase.tsx";
import Resume from "./pageComponents/Resume.tsx";

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
