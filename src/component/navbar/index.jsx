import { Container, Nav, Navbar } from "react-bootstrap";
import "./index.css";
import Logo from "../../assets/image/Logo.svg"
import mail from "../../assets/image/mail.svg";
import bell from "../../assets/image/bell.svg";
import home from "../../assets/image/home.svg";
import homerec from "../../assets/image/home-recruiter.svg";
import { useSelector } from "react-redux";

const NavBar = () => {
    const {data} = useSelector(state => state.user)

    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ maxHeight: '100px' }}>
            <Container >
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        alt=""
                        className=""
                        style={{ width: "140px" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-5">
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
                        {
                          localStorage.getItem("token") ?
                        <Nav.Link href={localStorage.getItem("company_name") ? '/edit-recruiter' : '/edit-candidate'}>
                            <img
                                src={localStorage.getItem("company_name") ? homerec : home}
                                alt=""
                                className="profile"
                                style={{ width: "40px" }}
                            />

                        </Nav.Link>
                          :
                          undefined
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
