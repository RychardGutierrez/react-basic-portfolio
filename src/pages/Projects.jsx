import React from 'react';
import ProjectItem from '../components/ProjectItem';

import { data } from '../data/projectList';

import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal project</h1>
      <div className="projectList">
        {data.map(({ name, img, id }) => (
          <ProjectItem id={id} name={name} img={img} key={`project-${id}`} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
