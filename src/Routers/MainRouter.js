import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PublicRouter from './PublicRouter';

const MainRouter = () => {
  return (
    <Router>
      <Navbar />
      <PublicRouter />
      <Footer />
    </Router>
  );
};

export default MainRouter;
