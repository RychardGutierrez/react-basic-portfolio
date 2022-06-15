import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

const Navbar = () => {
  const [expendNavbar, setExpendNavbar] = useState(false);
  const location = useLocation();
  const handleExpendNavbar = () => setExpendNavbar((prev) => !prev);

  useEffect(() => {
    setExpendNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expendNavbar ? 'open' : 'close'}>
      <div className="toggleButton">
        <button onClick={handleExpendNavbar}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
};

export default Navbar;
