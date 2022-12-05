import { Navbar,Container,Nav } from "react-bootstrap" 
import { useState,useEffect } from "react"
import logo from '../assets/img/irshlogo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


export const NavBar = () => {
    const [activeLink,setactiveLink] = useState('home')
    const [scrolled,setScrolled] = useState(false)


    useEffect (()=>{
        const onScroll = () =>{
            if(window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll',onScroll)

        return () => window.removeEventListener('scroll',onScroll)
    },[])

    const onUpdateActiveLink = (value) => {
        setactiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled': ''}>
            <Container>
                <Navbar.Brand   href="#home">
                    <img  className="rounded d-flex" src={logo}  alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="NavBar-toogle-icon text-white">menu</span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={()=> onUpdateActiveLink('home')} >Home</Nav.Link>
                        <Nav.Link href="#skill" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link' } onClick={()=> onUpdateActiveLink('skill')} >Skill</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' }  onClick={()=> onUpdateActiveLink('project')}>Projects</Nav.Link>
                    </Nav>
                    <span className="NavBar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/irshad-sanu-b293b71aa/" ><img src={navIcon1} alt="linkedIn"/> </a>
                            <a href="https://www.facebook.com/sanu.irshad.5" ><img src={navIcon2} alt="Facebook"/> </a>
                            <a href="https://www.instagram.com/irshad___sanu/" ><img src={navIcon3} alt="instagram"/> </a>
                        </div>
                       <a href="#connect"> <button className="vvd"  onClick={()=>onUpdateActiveLink('connect')}><span>Let's connect</span></button></a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}