import React, { Component } from 'react';



class projectTile
 extends Component {
    constructor(props){
        super(props);
        this.state={
            name: props.name,
            description:props.description,
            thumbnail:null,
            url:props.url,
            lang:props.lang
        }
    }

    render(){
        return(
            <div className='col-lg-5 col-md-8 col-sm-10 project-tile'>
                <h2>{this.state.name}</h2>
                <p>{this.state.description}</p>
                <p>{this.state.language}</p>
                <a href={this.state.url}>Github</a>
            </div>
        )
    }

}

export default projectTile
;