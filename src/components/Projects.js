import React, { Component} from 'react';
import ProjectTile from './ProjectTile';
import { Container } from 'react-bootstrap';
import LoadingSpinner from './LoadingSpinner';

class Projects extends Component {
    constructor(props){
        super(props)

        this.state = {
            projectList:[ ],
            message: null,
            loading: true
        }
    }

    componentDidMount(){
        this.setState({loading: true});
        this.getGithubRepos();
    }

getGithubRepos(){
    fetch("https://api.github.com/users/iharris06/repos")
        .then(response => response.json())
        .then(data => this.setState({
            projectList: data,
            message: 'success',
            loading: false
        }))
        .catch(err =>{this.setState({message: err, loading:false})});
}


    render(){
        return(
            <Container className='container-fluid'>
                <div className="row">
                    <div className="col">
                        <h1 className='light-text'>Projects</h1>
                        {this.state.loading ? 
                            <LoadingSpinner type='cubes' color="white" height={100} width={100} /> :
                        
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
                        }
                        
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