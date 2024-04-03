import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbrowser.css';

export default function Navbrowser(){
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark-subtle ">
          <Container>
            <Navbar.Brand style={{marginRight: '100px'}} href="/">World Digital Design</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="me-auto">
                <NavLink className="nav-link d-flex justify-content-center" aria-current="page" to={"/"}>Inicio</NavLink>
                <NavLink to={"/acerca-de"} className="nav-link d-flex justify-content-center">Acerca De</NavLink>
                <NavLink to={"/portfolio"} className="nav-link d-flex justify-content-center">Portfolio</NavLink>
                <NavLink to={"/contacto"} className="nav-link d-flex justify-content-center">Contacto</NavLink>
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