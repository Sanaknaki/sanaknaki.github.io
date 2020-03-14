import React from 'react';
import { Navbar, Nav, InputGroup, FormControl, Button, Tabs,  Tab, Container, Row, Col } from 'react-bootstrap';
import ResultLink from '../component/google/resultLink.jsx';
import ProjectImage from '../component/google/projectImage.jsx';
import ProjectDescription from '../component/google/projectDescription.jsx';
import AliNation from '../component/google/aliNation.jsx';
import Footer from '../component/google/footer.jsx';

import logo from '../../logo-google.png';

import data from '../../data/data.json';

import '../../css/google.css';

class Google extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            col: 12,
            projectInfoEnabled: false,
            footerStickyOrFixed: "fixed",
            
            image_link: "",
            more_img_link: "",
            sketch_link: "",
            work_link: "",
            description:  "",

        }

        this.toggleProjectInfo = this.toggleProjectInfo.bind(this);
    }

    toggleProjectInfo(image_link="", more_img_link="", sketch_link="", work_link="", description="", close=0) {
        if(close) {
            this.setState({
                col: 12,
                projectInfoEnabled: false,
                footerStickyOrFixed: "fixed",
    
                image_link,
                more_img_link,
                sketch_link,
                work_link,
                description
            });
        } else {
            this.setState({
                col: 6,
                projectInfoEnabled: true,
                footerStickyOrFixed: "relative",
    
                image_link,
                more_img_link,
                sketch_link,
                work_link,
                description
            });
        }
    };

    renderResultLinks() {
        let listOfResultLinks = [];

        data.about.map(resultLink => {
            listOfResultLinks.push(
                <ResultLink 
                    url={resultLink.url} 
                    title={resultLink.title}
                    body={resultLink.body}
                    link={resultLink.link}
                />
            );
        });

        return listOfResultLinks;
    };

    renderProjects() {
        let listOfProjects = [];

        data.projects.map(project => {
            listOfProjects.push(
                <ProjectImage 
                    img_link={project.img_link}
                    more_img_link={project.more_img_link}
                    title={project.title} 
                    description={project.description} 
                    sketch_link={project.sketch_link}
                    work_link={project.work_link}


                    col={this.state.col} 
                    toggleProjectInfo={this.toggleProjectInfo} 
                />
            );
        });

        return listOfProjects;

    };

    render() {
        const tabAbout = <div className="tab-title"><i className="far fa-user"></i> About</div>;
        const tabProjects = <div className="tab-title"><i className="far fa-sticky-note"></i> Projects</div>;
    
        return (
            <React.Fragment>
                <Navbar className="navbar-google" expand="lg">
                    <Navbar.Brand href="#home"><img src={logo} height={50} alt="Logo" /></Navbar.Brand>
        
                    <Navbar id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <InputGroup>
                                <FormControl className="search-google" placeholder="Sanaknaki" aria-label="Sanaknaki" aria-describedby="basic-addon2" />
                                <InputGroup.Append>
                                    <Button className="search-button-google"><i className="fas fa-search blue"></i></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Nav>
                    </Navbar>
                </Navbar>

                <Tabs style={{paddingLeft: "85px"}} defaultActiveKey="about" id="uncontrolled-tab-example" onSelect={() => this.toggleProjectInfo(null, null, null, null, null, 1)}>

                    <Tab eventKey="about" title={tabAbout}>
                        <Container style={{padding: "0px", margin: "0px"}}>
                            <Row>
                                <Col md={12} className="left-padding" style={{paddingTop: "10px"}}>
                                    <p className="results-title dimmedgrey">About 2 years of professional experience</p>
                                </Col>

                                <Col md={8} className="left-padding">
                                    {this.renderResultLinks()}
                                </Col>

                                <Col md={6} className="pagination-padding">
                                    <AliNation />
                                </Col>
                            </Row>
                        </Container>
                    </Tab>

                    <Tab eventKey="projects" title={tabProjects}>
                        <Container style={{maxWidth: "100%"}}>
                            <Row>
                                <Col md={this.state.col}>
                                    <Container>
                                        <Row style={{marginTop: "10px", marginLeft: "5px", marginRight: "5px"}}>
                                            {this.renderProjects()}
                                        </Row>
                                    </Container>
                                </Col>
                                {(this.state.projectInfoEnabled) ? 
                                <Col md={6} style={{marginRight: "0px", paddingRight: "0px"}}>
                                    <ProjectDescription 
                                        image_link={this.state.image_link}
                                        more_img_link={this.state.more_img_link}
                                        sketch_link={this.state.sketch_link}
                                        work_link={this.state.work_link}

                                        toggleProjectInfo={this.toggleProjectInfo}
                                        description={this.state.description}
                                    />
                                </Col>
                                : null}
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>

                <Footer footerStickyOrFixed={this.state.footerStickyOrFixed} />
            </React.Fragment>
        );
    }
}

export default Google;
