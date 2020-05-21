import React from 'react';

import { Container, Navbar, Row, Col} from 'react-bootstrap';

import '../../css/google.css';

class ProjectInfo extends React.Component {
    render() {
        return (
            <Navbar sticky="bottom" expand="lg" variant="light" bg="light" style={{position: "sticky", bottom: "0px", width: "100%"}}>
                <Container>
                    <Row>
                        <Col md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center"}}>
                            <span style={{fontSize: "25px", fontWeight: "700", color: "#454545"}}>{this.props.title}</span>
                            <span onClick={() => this.props.toggleProjectInfo()} style={{position: "absolute", marginRight: "10px", marginTop: "10px", cursor: "pointer"}}><i style={{color: "#EF4949"}} className="fas fa-times"></i></span>
                        </Col>

                        <Col md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center"}}>
                            <span>
                                {(this.props.workLink != "") ? <a style={{color: "#454545"}} target="_blank" href={this.props.workLink}><i className="fas fa-link"></i></a> : null}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {(this.props.sketchLink != "") ? <a style={{color: "#FDAB01"}} href={"/sketch/" + this.props.sketchLink + ".sketch"} download><i class="fab fa-sketch"></i></a> : null}
                                <br /><br />
                            </span>
                        </Col>

                        <Col md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center"}}>
                            <span href="#">{this.props.description}</span>
                            <br /><br />
                        </Col>

                        <Col md={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                            <img className="project-image" src={"/img/" + this.props.imageLink + ".png"} width={"50%"} height={"auto"} alt="Project" draggable={false} />
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        );
    }
}

export default ProjectInfo;
