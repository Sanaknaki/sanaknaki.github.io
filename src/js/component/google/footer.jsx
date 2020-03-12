import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import '../../../css/google.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
            <Navbar className="footer-google left-padding right-padding" expand="lg" style={{bottom: "0px", position : this.props.footerStickyOrFixed}}>
                <Nav className="text-center">
                    Made with ❤ and 🍵
                </Nav>
            </Navbar>
            </div>
        );
    }
}

export default Footer;
