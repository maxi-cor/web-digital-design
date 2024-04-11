import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbrowser.css';

export default function Navbrowser(){
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark">
          <Container>
            <Navbar.Brand style={{marginRight: '100px', color: 'white'}} href="/">World Digital Design</Navbar.Brand>
            <Navbar.Toggle style={{backgroundColor: "white"}} aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="me-auto">
                <NavLink activeclassname="active" className="nav-link d-flex justify-content-center " aria-current="page" to={"/"}>Inicio</NavLink>
                <NavLink activeclassname="active" to={"/acerca-de"} className="nav-link d-flex justify-content-center">Acerca De</NavLink>
                <NavLink activeclassname="active" to={"/portfolio"} className="nav-link d-flex justify-content-center">Portfolio</NavLink>
                <NavLink activeclassname="active" to={"/contacto"} className="nav-link d-flex justify-content-center">Contacto</NavLink>
              </Nav>
              <Nav>
                <Nav.Link className='d-flex justify-content-center' href="#deets">Instagram</Nav.Link>
                <Nav.Link className='d-flex justify-content-center' href="#memes">Facebook</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}