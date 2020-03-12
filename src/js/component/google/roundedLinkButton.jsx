import React from 'react';

import { Button } from 'react-bootstrap';

import '../../../css/google.css';


class RoundedLinkButton extends React.Component {
    render() {

        let button = (this.props.title === "Download Sketch File") ?
            <a href={"/sketch/" + this.props.download_name + ".sketch"} download><Button className="rounded-link-btn">{this.props.icon} <span style={{fontSize: "14px"}}>{this.props.title}</span></Button></a> :
            <a href={this.props.website} rel="noopener noreferrer"><Button className="rounded-link-btn">{this.props.icon} <span style={{fontSize: "14px"}}>{this.props.title}</span></Button></a>;

        return button;
    }
}

export default RoundedLinkButton;
