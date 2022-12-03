import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import prof from "../assets/img/prof.JPG";
import { Button } from 'react-bootstrap';
import {FiDownload} from 'react-icons/fi'
import irshad from '../assets/file/resume_irshad.pdf'


export const Profile = () => {

   

  return (
    <section>
      <MDBContainer >
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard  style={{ borderRadius: '15px',backgroundColor:'#000' }}>
              <MDBCardBody className="p-4 " >
                <div className="d-flex text-white">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src={prof}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Mohammed Irshadali T</MDBCardTitle>
                    <MDBCardText>Web Developer</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: 'rgb(41 36 36)' }}>
                      <div>
                        <p className="small text-muted mb-1">Projects</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">54.3K</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.9</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                     <a href='https://wa.me/9656249938'> <Button variant='dark' className="me-2 ms-4">Chat me</Button>  </a>
                     <a href={irshad} download="resume" > <Button variant='dark' >Resume <FiDownload/></Button>   </a>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}