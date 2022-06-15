import { useParams } from 'react-router-dom';
import { data } from '../data/projectList';
import GitHubIcon from '@mui/icons-material/GitHub';

import '../styles/ProjectDisplay.css';

const ProjectDisplay = () => {
  const { id: idPath } = useParams();

  const { skills, name, img } = data.find(({ id }) => id === idPath);

  return (
    <div className="project">
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>
        <b>Skills: {skills}</b>
      </p>
      <GitHubIcon />
    </div>
  );
};

export default ProjectDisplay;
