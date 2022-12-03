import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import netflix from "../assets/img/netflix.jpg";
import olx from "../assets/img/olx.png";
import tesla from "../assets/img/tesla.jpg";
import task from "../assets/img/task-manager.png";
import todo from "../assets/img/todo.jpeg";
import machub from "../assets/img/machub.jpg";
import geo from "../assets/img/geo.jpg";
import emoji from "../assets/img/emoji.jpg";
import blog from "../assets/img/blog.jpg";
import weather from "../assets/img/Weather.png";
import insta from "../assets/img/insta.jpg";
import location from "../assets/img/location.png";
import resume from "../assets/img/resume.png";
import accident from "../assets/img/accident.png";
import literoom from "../assets/img/literoom.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {

  const Completed = [
    {
      title: "Netflix-Clone",
      description: "React-Project",
      imgUrl: netflix,
    },
    {
      title: "OlX-Clone",
      description: "React & Firebase",
      imgUrl: olx,
    },
    {
      title: "Tesla-Clone",
      description: "React & Tailwind Css",
      imgUrl: tesla,
    },
    {
      title: "Task-Manager",
      description: "React Project",
      imgUrl: task,
    },
    {
      title: "ToDo App",
      description: "React project",
      imgUrl: todo,
    },
    {
      title: "MacHub",
      description: "Python Django project",
      imgUrl: machub,
    },
  ];

  const onprogress = [
    {
      title: "GoeLocation",
      description: "Python & Api",
      imgUrl: geo,
    },
    {
      title: "Emoji Search",
      description: "React Project",
      imgUrl: emoji,
    },
    {
      title: "Blog App",
      description: "Design & Development",
      imgUrl: blog,
    },
    {
      title: "Weather App",
      description: "Design & Development",
      imgUrl: weather,
    },
    {
      title: "Instagram-Clone",
      description: "React project",
      imgUrl: insta,
    },
   
  ];

  const upcoming = [
    {
      title: "Location Tracker",
      description: "Design & Development",
      imgUrl: location,
    },
    {
      title: "Resume Builder",
      description: "Design & Development",
      imgUrl: resume,
    },
    {
      title: "Accident Traker",
      description: "Design & Development",
      imgUrl: accident,
    },
    {
      title: "LiteRoom-Clone",
      description: "Design & Development",
      imgUrl: literoom,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>From Web Components and bootstrap to React.JS,Redux,Python
                    <br></br>
                    Check out my latest web software development Projects
                    <br></br>
                    showing all projects. choose the Tab for more Projects 
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Completed</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">OnProgress</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">UpComing</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Completed.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          onprogress.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          upcoming.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}