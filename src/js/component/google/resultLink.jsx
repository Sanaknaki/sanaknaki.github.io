import React from 'react';

import Resume from '../../../file/resume_ali.pdf';

import '../../../css/google.css';

class ResultLink extends React.Component {
    render() {

        let title = (this.props.link) ? <a href={Resume} rel="noopener noreferrer" style={{color: "#1a0dab", fontSize: "18px", marginBottom: "0px"}}>{this.props.title}</a> : <p style={{color: "#1a0dab", fontSize: "18px", marginBottom: "0px"}}>{this.props.title}</p>;

        return (
            <React.Fragment>
                <p style={{color: "#222", fontSize: "13px", marginBottom: "0px"}}>{this.props.url}</p>
                {title}
                <p style={{color: "#222", fontSize: "13px", marginBottom: "30px"}}>{this.props.body}</p>
            </React.Fragment>
        );
    }
}

export default ResultLink;
