// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Project from "./pages/Project";
import TechStack from "./pages/TechStack";
import ProjectDetail from "./pages/ProjectDetail";
import ContactForm from "./components/ContactForm";
import Np from "./pages/Np";
import MobileHome from "./pages/MobileHome";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/np" element={<Np />} />
        <Route path="/mobile" element={<MobileHome />} />
      </Routes>
    </Router>
  );
}

export default App;
