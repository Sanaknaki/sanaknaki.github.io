import React from 'react';
import { Row, Col, Container, Navbar } from 'react-bootstrap';

import ProjectTab from './components/ProjectTab.jsx';
import ProjectInfo from './components/ProjectInfo.jsx';

import data from '../data/data.json';
import resume from '../file/aliSanaknaki_resume.pdf';

import '../css/App.css';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectTitle: "",
            projectImageLink: "",
            projectDescription: "",
            projectSketchLink: "",
            projectWorkLink: "",

            showProjectInfo: false
        }

        this.toggleProjectInfo = this.toggleProjectInfo.bind(this);
    }

    renderProjects() {
        let listOfProjects = [];

        data.projects.map(project => {
            listOfProjects.push(
                <ProjectTab
                    key={project.id}
                    project={project}
                    toggleProjectInfo={this.toggleProjectInfo}
                />
            );
        });
        
        return listOfProjects;

    };

    toggleProjectInfo(title="", imageLink="", description="", sketchLink="", workLink="") {
        if(this.state.showProjectInfo) {
            this.setState({
                projectTitle: "",
                projectImageLink: "",
                projectDescription: "",
                projectSketchLink: "",
                projectWorkLink: "",

                showProjectInfo: false
            });
        } else {
            this.setState({
                projectTitle: title,
                projectImageLink: imageLink,
                projectDescription: description,
                projectSketchLink: sketchLink,
                projectWorkLink: workLink,

                showProjectInfo: true
            });
        }
    }

    renderProjectInfo() {
        
        if(this.state.showProjectInfo) {
            return <ProjectInfo title={this.state.projectTitle} imageLink={this.state.projectImageLink} description={this.state.projectDescription} sketchLink={this.state.projectSketchLink} tech={this.state.tech} workLink={this.state.projectWorkLink} toggleProjectInfo={this.toggleProjectInfo} />
        }
    }

    render() {
        return (
            <React.Fragment>
                <Row onClick={(this.state.showProjectInfo) ? () => this.toggleProjectInfo() : null} style={{filter: (this.state.showProjectInfo) ? "blur(3px)" : "blur(0px)"}}>
                    <Col md={6}>
                        <div className="App-header">
                            <h1>Ali Sanaknaki</h1>
                            <h4>Software ? Designer : Developer;</h4>
                            <a style={{textDecoration: "none", color: "#454545", fontSize: "1rem"}} href={resume}>Check out my resume!</a>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="App-header">
                            {this.renderProjects()}
                        </div>
                    </Col>
                </Row>
                {this.renderProjectInfo()}
            </React.Fragment>
        );
    }
}

export default Main;
