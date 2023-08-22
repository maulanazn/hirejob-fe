import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./index.css";
import Logo from "../../assets/image/Logo.svg"
import mail from "../../assets/image/mail.svg";
import bell from "../../assets/image/bell.svg";
import photo from "../../assets/image/photo.svg";

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ maxHeight: '100px' }}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Logo}
                        alt=""
                        className=""
                        style={{ width: "140px" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">
                            <img
                                src={bell}
                                alt=""
                                className="bell"
                                style={{ width: "40px" }}
                            />
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <img
                                src={mail}
                                alt=""
                                className="mail"
                                style={{ width: "40px" }}
                            />
                        </Nav.Link>
                        <Nav.Link href="#profile">
                            <img
                                src={photo}
                                alt=""
                                className="profile"
                                style={{ width: "40px" }}
                            />

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;