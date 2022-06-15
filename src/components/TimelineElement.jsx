import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css';

const TimelineElement = ({
  date,
  iconStyle,
  icon,
  title,
  subTitle,
  content,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-time-element--education"
      date={date}
      iconStyle={iconStyle}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title textCenter">{title}</h3>
      {subTitle && (
        <h4 className="vertical-timeline-element-subtitle textCenter">
          {subTitle}
        </h4>
      )}
      <p className="textCenter">{content}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
