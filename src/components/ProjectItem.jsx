import { useNavigate } from 'react-router-dom';

const ProjectItem = ({ img, name, id }) => {
  const navigate = useNavigate();
  const navigatePage = (id) => navigate(`/projects/${id}`);

  return (
    <div className="projectItem" onClick={() => navigatePage(id)}>
      <div style={{ backgroundImage: `url(${img})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
};

export default ProjectItem;
