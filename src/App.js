import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' name='blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />} />
        </Switch>
      </Router>
  );
}

export default App;
