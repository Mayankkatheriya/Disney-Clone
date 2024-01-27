import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';

function App() {
  return (
    <div className="App">
      {/* Set up the main router using BrowserRouter */}
      <Router>
        {/* Include the Header component to be displayed on all routes */}
        <Header />
        
        {/* Define routes using the Routes component */}
        <Routes>
          {/* Route for the Login component, accessible at the root path */}
          <Route path="/" element={<Login />} />

          {/* Route for the Home component, accessible at the "/home" path */}
          <Route path="/home" element={<Home />} />

          {/* Route for the Home component, accessible at the "/detail:id" path */}
          <Route path="/detail/:id" element = {<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
