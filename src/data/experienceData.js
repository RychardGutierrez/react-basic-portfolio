import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export const data = [
  {
    id: '1',
    date: '2010 - 2014',
    iconStyle: { background: '#3e497a', color: '#fff' },
    icon: <SchoolIcon />,
    title: 'My Random High School, Random Place, Random State',
    content: 'High School Diploma',
  },
  {
    id: '2',
    date: '2014 - 2018',
    iconStyle: { background: '#6592fc', color: '#fff' },
    icon: <SchoolIcon />,
    title: 'My Cool University, Vancouver, British Columbia',
    content: "Bachelor's Degree",
  },
  {
    id: '3',
    date: '2018 - 2020',
    iconStyle: { background: '#e9d35b', color: '#fff' },
    icon: <WorkIcon />,
    title: 'Back End Engineer - Google',
    content: 'San Francisco, CA',
  },
  {
    id: '4',
    date: '2020 - present',
    iconStyle: { background: '#e35812', color: '#fff' },
    icon: <WorkIcon />,
    title: 'My Random High School, Random Place, Random State',
    content:
      'Helped the team launch 2 major features by working both in the front end and back end.',
  },
];
