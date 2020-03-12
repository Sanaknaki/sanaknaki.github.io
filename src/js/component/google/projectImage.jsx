import React from 'react';

import { Col } from 'react-bootstrap';

import '../../../css/google.css';

class ProjectImage extends React.Component {

    renderLinkGroup() {
        let links = [];
        
        if(this.props.sketch_link !== "") { links.push(<span className="project-image-link"><i className="fab fa-sketch"></i></span>); }
        if(this.props.work_link !== "") { links.push(<span className="project-image-link"><i className="fas fa-globe-americas"></i></span>); }

        return <span>{links}</span>
    };

    render() {
        return (
            <Col md={4} style={{marginBottom: "15px"}}>
                <img className="project-image" onClick={() => this.props.toggleProjectInfo(this.props.img_link, this.props.more_img_link, this.props.sketch_link, this.props.work_link, this.props.description, null)} src={"/img/" + this.props.img_link + ".png"} width={"100%"} alt="Project" draggable={false} />
                <p className="project-image-title">{this.props.title}</p>
                {this.renderLinkGroup()}
            </Col>
        );
    }
}

export default ProjectImage;
