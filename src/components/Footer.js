import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./Mailchimpform";
import logo from '../assets/img/irshlogo.png'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img className="shadow-lg  rounded d-flex" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/irshad-sanu-b293b71aa/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/sanu.irshad.5"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/irshad___sanu/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Irshad_sanu</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}