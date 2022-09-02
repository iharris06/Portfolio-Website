import React, { Component } from 'react';



class projectTile
 extends Component {
    constructor(props){
        super(props);
        this.state={
            name: props.name,
            description:props.description,
            thumbnail:null,
            url:props.url
        }
    }


    render(){
        return(
            <a className='col-lg-5 col-md-5 col-sm-12 project-tile align-self-center link-text-light' href={this.state.url}>
                <h2>{this.state.name}</h2>
                <p>{this.state.description}</p>
            </a>
        )
    }

}

export default projectTile;