import React from 'react';

import { Toast } from 'react-bootstrap';

import '../../css/google.css';

class ProjectTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
            show: true
        }

        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    };

    renderCategoremoji() {
        switch(this.props.project.type) {
            case "web":
                return "💻"
            case "ios":
                return "📱"
            case "design":
                return "🖌"
            case "hardware":
                return "🛠"
            default:
                return "🐞"
          }
    };

    render() {
        if(this.state.show) {

            var linkStyle, title;
            if (this.state.hover) {
              linkStyle = {backgroundColor: "#63CBFF", color: "#FFFFFF", fontWeight: "bold"}
              title=this.props.project.tech;
            } else {
              linkStyle = {backgroundColor: "#FFFFFF", color: "#454545"}
              title=this.props.project.title
            }

            return (
                <Toast onClick={() => this.props.toggleProjectInfo(this.props.project.title, this.props.project.img_link, this.props.project.description, this.props.project.sketch_link, this.props.project.work_link)} show={this.state.show} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={{width: "70vw", minWidth: "30vw", cursor: "pointer", ...linkStyle}}>
                    <Toast.Header style={{paddingTop: "20px", paddingBottom: "20px", marginLeft: "10px", ...linkStyle}}>
                        {this.renderCategoremoji()}
                        <strong style={{paddingLeft: "20px"}} className="mr-auto">{title}</strong>
                    </Toast.Header>
                </Toast>
            );
        } else {
            return null
        }
    }
}

export default ProjectTab;
