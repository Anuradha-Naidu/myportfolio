import { useEffect, useState } from "react";
import { NavBar, Container  } from "react-bootstrap";

export const NavBar = () => {
 const [activeLink, setActiveLink] = useState('home');
 const [scrolled, seScrolled] = useState(false);

 useEffect(() => {
  const onScroll = () => {
   if(window.scrollY > 50){
    seScrolled(true);
   } else{
    seScrolled(false);
   }
  }
 })


 return(

    <NavBar expand="lg">
      <Container>
        <NavBar.Brand href="#home">
         <img src={} alt="logo" />
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav">
         <span className="navbar-toggler-icon"></span>
         </NavBar.Toggle>
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
           <div className="social-icon ">
             <a href="#a" > <img src={} alt=""/></a>
             <a href="#a" > <img src={} alt=""/></a>
             <a href="#a" > <img src={} alt=""/></a>
           </div>
           <button></button>
          </span>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
}




