import React from "react";
import { Nav } from 'react-bootstrap';
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

const Navigation = () => {
    return (
        <div className="NavBox">
            <h3 id="name" >Paweł Nowecki</h3>
            <Nav className="menu-link"
                 activeKey="/home">
                <Nav.Item>
                    <ScrollLink
                        className="navy"
                        smooth={true}
                        duration={500}
                        to="FourSteps"
                        // eventKey="Active"
                    >Active
                </ScrollLink>
                </Nav.Item>
                <Nav.Item>
                    <ScrollLink
                        className="navy"
                        smooth={true}
                        duration={500}
                        to="FourSteps"
                        // eventKey="link-1"
                    >Link
                </ScrollLink>
                </Nav.Item>
                <Nav.Item>
                    <ScrollLink
                        className="navy"
                        smooth={true}
                        duration={500}
                        to="FourSteps"
                        // eventKey="link-2"
                    >Link
                </ScrollLink>
                </Nav.Item>
                <Nav.Item>
                    <ScrollLink
                        className="navy"
                        smooth={true}
                        duration={500}
                        to="FourSteps"
                        // eventKey="disabled"
                    >Disabled
                </ScrollLink>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navigation;