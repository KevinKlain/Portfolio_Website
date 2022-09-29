import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {

    const [activLink, setActivLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect( () => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActivLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? 'scrolled': ''}>
      <Container>
        <Navbar.Brand href="#home">
        <img src = {''} alt = 'Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social.icon'>
                <a href='#'>Insta<img scr={''} alt="" /></a>
                <a href='#'>Git<img scr={''} alt="" /></a>
                <a href='#'>LinkedIn<img scr={''} alt="" /></a>
            </div>
            <button className='vvd' onClick={ () => console.log('connect')}>
                <span>
                   Let's Connect 
                </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;