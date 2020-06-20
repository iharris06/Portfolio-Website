import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
            <Navbar.Brand className="brand-title">Ian Harris</Navbar.Brand>            
            <Nav className="nav-links">  
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
            </Nav>
        </Navbar>
        
        <Route exact= {true} path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/:id" render = {()=> (<p> This page is currently under construction. Remember, be safe and wear a face mask. </p>)}/>
      </div>
    );
  }
}

export default App;
