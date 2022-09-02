import React, { Component } from 'react';
import resume from '../images/Ian Harris Resume.png';
import { Container } from 'react-bootstrap';

class About extends Component {
render(){
    return(
        <Container class="container-fluid page">
            <div class="row">
                <div class="col">
                    <h2 className='light-text'>About</h2>
                    <img src={resume} className="resume-doc img-fluid" alt="resume" />
                </div>
            </div>

        </Container>
    )
}
}

export default About;