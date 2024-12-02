import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Home: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>
      Főoldal
    </Typography>
    <Button variant="contained" color="primary">
      Üdv itthon!
    </Button>
  </div>
);

const About: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>
      Rólunk
    </Typography>
    <Typography>
      Ez egy példaprojekt React + TypeScript + Material UI + React Router segítségével.
    </Typography>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Button component={Link} to="/" variant="text" color="primary">
          Főoldal
        </Button>
        <Button component={Link} to="/about" variant="text" color="primary">
          Rólunk
        </Button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
