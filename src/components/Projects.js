import React, { Component} from 'react';
import ProjectTile from './ProjectTile';
import { Container } from 'react-bootstrap';

class Projects extends Component {
    constructor(props){
        super(props)

        this.state = {
            projectList:[{'name':'test1', 'id':'2'}, {'name':'test2', 'id':'1'}, {'name':'test3', 'id':'3'} ],
            message: null
        }
    }

    componentDidMount(){
        this.getGithubRepos();
    }

getGithubRepos(){
    fetch("https://api.github.com/users/iharris06/repos")
        .then(response => response.json())
        .then(data => this.setState({
            projectList:data,
            message: 'success'
        }))
        .catch(err =>{this.setState({message:err})});
}


    render(){
        return(
            <Container class="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Projects</h1>
                        <div className="row justify-content-center">
                            {this.state.projectList.map(project => {
                                return (
                                    <ProjectTile 
                                        name={project.name}
                                        description={project.description}
                                        url={project.html_url}
                                        key={project.id}
                                        lang={project.language}
                                    />
                                )
                            })
                            }
                        </div>
                        
                    </div>
                </div>
            </Container>
            /* TODO
            Add projects components to this page.
            - click on tiles to launch modal to be able to read more details and view demo.
            - demo video of app
            */
        )
    }
}

export default Projects;