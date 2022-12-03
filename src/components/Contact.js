import {  useRef,useState } from "react";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import { Repeat } from "react-bootstrap-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export const Contact = () => {
 
  
    const [message,setMessage] = useState('')



    const form = useRef();

    const [seed, setSeed] = useState(1);
    const reset = () => {
         setSeed(Math.random());
     }



  const handleSubmit =  (event) => {
    event.preventDefault();
   
        emailjs.sendForm('service_4qqlaep', 'template_bg6grtp', form.current, 'd7BFl3Yi8LJupIfom')
        .then((result) => {
            console.log(result.text)
            setMessage('message sending successfully')
            
            

            
        }, (error) => {
            console.log(error.text)
            setMessage('oop`s Try again !!')
        })
      }



      const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Refresh Contact form
        </Tooltip>
      );
      

 
    

 


  return (
    <section className="contact" id="connect" key={seed}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>

                
                <form onSubmit={handleSubmit} ref={form} >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstname" placeholder="First Name"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastname"  placeholder="Last Name"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email"  placeholder="Email Address"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" name="message"  ></textarea>
                      <button  type="submit"><span>SEND</span></button>
                      
                       <OverlayTrigger
                          placement="right"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <Repeat variant="success" size={36} className="m-4"   onClick={reset}/>
                        </OverlayTrigger>
                    </Col>
                    {
                      message &&
                      <Alert className="mt-3">
                        <p className={ message === false ? "danger " : "success  "}>{message}</p>
                      </Alert>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}