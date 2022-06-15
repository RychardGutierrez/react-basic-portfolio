import { Routes, Route } from 'react-router-dom';
import Experience from '../pages/Experience';
import Home from '../pages/Home';
import ProjectDisplay from '../pages/ProjectDisplay';
import Projects from '../pages/Projects';

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDisplay />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
};

export default PublicRouter;
