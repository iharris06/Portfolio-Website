import React from 'react';
import { Container } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import * as Constants from  '../constants';

const LoadingSpinner = ({ type, color }) => (
    <Container>   
        <div className='row align-items-center justify-content-center'>
            <div className='col align-self-center'>
                <ReactLoading type='cubes' color={color} height={100} width={100} className='spinner'/>
                <h1 className='light-text'>{Constants.LOADING_MESSAGE}</h1>
            </div>
        </div>
    </Container>
    
    
);

export default LoadingSpinner;