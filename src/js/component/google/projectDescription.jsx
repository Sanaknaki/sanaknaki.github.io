import React from 'react';

import { Col } from 'react-bootstrap';

import RoundedLinkButton from './roundedLinkButton.jsx';

import '../../../css/google.css';

class ProjectDescription extends React.Component {

    renderRoundedLinkButtons() {
        let listOfButtons = [];

        if(this.props.sketch_link !== "") {
            listOfButtons.push(
                <RoundedLinkButton
                    icon={<i style={{color: "#609beb"}} className="fab fa-sketch"></i>}
                    download_name={this.props.image_link}
                    title="Download Sketch File"
                />
            );
        }

        if(this.props.work_link !== "") {
            listOfButtons.push(
                <RoundedLinkButton
                    icon={<i style={{color: "#609beb"}} className="fas fa-globe-americas"></i>}
                    website={this.props.work_link}
                    title="Check Out Website"
                />
            );
        }

        return <div style={{ width: "100%", marginBottom: "1rem" }} className="text-left">{listOfButtons}</div>;
    };

    renderConcept() {
        if(this.props.more_img_link !== "") {
            return <img style={{marginBottom: "1rem"}} src={"/img/" + this.props.more_img_link + ".png"} width={"100%"} alt="Project Concept" draggable={false} />;
        }

        return null;
    };

    render() {
        return (
            <Col md={12} className="project-desc" style={{width: "100%"}}>
                <span style={{width: "100%", fontSize: "15px", marginBottom: "1rem", marginTop: "1rem"}} className="text-left"><i className="fas fa-times close-icon" onClick={() => this.props.toggleProjectInfo(null, null, null, null, null, 1)}></i></span>
                <img className="project-image" src={"/img/" + this.props.image_link + ".png"} width={"100%"} alt="Project" draggable={false} />
                <hr style={{width: "100%", borderColor: "rgba(255,255,255,.2)"}} />
                {this.renderRoundedLinkButtons()}
                <p style={{fontSize: "18px"}}>{this.props.description}</p>
                {this.renderConcept()}
            </Col>
        );
    }
}

export default ProjectDescription;
