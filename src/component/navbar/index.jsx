import { Container, Nav, Navbar } from "react-bootstrap";
import "./index.css";
import Logo from "../../assets/image/Logo.svg"
import mail from "../../assets/image/mail.svg";
import bell from "../../assets/image/bell.svg";
import home from "../../assets/image/home.svg";
import homerec from "../../assets/image/home-recruiter.svg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  function LogoutUser() {
    if (localStorage.getItem("company_name")) {
      localStorage.clear()
      navigate("/")
    } else {
      localStorage.clear()
      navigate("/login/candidate")
    }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ maxHeight: '100px' }}>
      <Container >
        <Navbar.Brand href={localStorage.getItem("company_name") ? '/home' : '/'}>
          <img
            src={Logo}
            alt=""
            className=""
            style={{ width: "140px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {
          localStorage.getItem("token") ?
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-5">
              {
                localStorage.getItem("company_name") ? 
                  <Nav.Link onClick={LogoutUser}>
                    Logout
                  </Nav.Link>
                :
                  undefined
              }
              <Nav.Link href="#home">
                <img
                  src={bell}
                  alt=""
                  className="bell"
                  style={{ width: "30px" }}
                />
              </Nav.Link>
              <Nav.Link href={localStorage.getItem("token") ? '/chat' : '/'}>
                <img
                  src={mail}
                  alt=""
                  className="mail"
                  style={{ width: "30px" }}
                />
              </Nav.Link>
              <Nav.Link href={localStorage.getItem("company_name") ? '/edit-recruiter' : '/edit-candidate'}>
                <img
                  src={localStorage.getItem("company_name") ? homerec : home}
                  alt=""
                  className="profile"
                  style={{ width: "30px" }}
                />

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          :
          undefined
        }
      </Container>
    </Navbar>
  );
};

export default NavBar;
