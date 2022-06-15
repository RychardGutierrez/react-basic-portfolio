import { VerticalTimeline } from 'react-vertical-timeline-component';

import TimelineElement from '../components/TimelineElement';
import SchoolIcon from '@mui/icons-material/School';
import { data } from '../data/experienceData';

import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {data.map(({ date, iconStyle, icon, title, content, id }) => (
          <TimelineElement
            date={date}
            iconStyle={iconStyle}
            icon={icon}
            title={title}
            content={content}
            key={id}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
