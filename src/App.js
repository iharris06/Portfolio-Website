import React, { Component } from 'react';
import './App.css';
import {Link,Route} from 'react-router-dom';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Spinner from './components/LoadingSpinner';
import { SocialIcon } from 'react-social-icons';


class App extends Component {
  render() {
    return (
      <div className="App container-fluid Color page">
        <nav className="navbar navbar-expand-lg navbar-dark" expand="md">
            <Link to="/" className="navbar-brand brand-title" style={{ textDecoration: 'none', color:"white" }}>Ian Harris</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className=" col align-self-center navbar-nav">
                  <Link className="nav-item nav-link link-text-dark" to="/">Home</Link>
                  <Link className="nav-item nav-link link-text-dark" to="/projects">Projects</Link>
                  <Link className="nav-item nav-link link-text-dark" to="/about">About</Link>
                  <Link className="nav-item nav-link link-text-dark" to="/contact">Contact</Link>
              </div>
              
              <div className="col align-self-center">
                <SocialIcon className="social" bgColor="white" url="https://github.com/iharris06"/>
                <SocialIcon className="social" bgColor="white" url="https://www.linkedin.com/in/ianharris-dev"/>
              </div>
              
            </div>
        </nav>
        
        <Route exact= {true} path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route exact path="/projects/:projectId" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/spinner" component={Spinner}/>
      </div>
    );
  }
}

export default App;
