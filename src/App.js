import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' name='blog' component={Blog}/>
          <Route path='/contact' component={Contact} />
        </Routes>
      </Router>
  );
}

export default App;
