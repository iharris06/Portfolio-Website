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
            <div className='col-lg-5 col-md-5 col-sm-12 project-tile align-self-center'>
                <h2>{this.state.name}</h2>
                <p>{this.state.description}</p>
                <a href={this.state.url}>Github</a>
            </div>
        )
    }

}

export default projectTile;