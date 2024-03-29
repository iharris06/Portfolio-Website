import React, { Component } from 'react';
import '../App.css';
import banner from '../images/computer-dark.jpg';
import {Link} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

class Home extends Component {
render(){
    return(
        <div className='Color'>
            <div className='row'>
                <div className="col align-self-center light-text">
                        <h2>Welcome to my site! </h2>
                        <p>Explore my <Link to="/projects" className="link-text-dark">Projects</Link> page to see what I've been working on.</p> 
                </div>
            </div>
            <div className='row'>
                <img src={banner} className="banner" alt="computer" />
            </div>
            <Spinner></Spinner>
        </div>
        
    )
}
}

export default Home;