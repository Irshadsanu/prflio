import Dskill from "../assets/img/djgo.png";
import fskill from "../assets/img/fr.png";
import gskill from "../assets/img/gt.png";
import askill from "../assets/img/aws.png";
import bskill from "../assets/img/boot.png";
import rskill from "../assets/img/rd.png";


import cskill from "../assets/img/css.png";
import hskill from "../assets/img/html.png";
import Rskill from "../assets/img/logo192.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap'
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="skill-bx wow zoomIn">
                                        <h2>Skills</h2>
                                        <p>A React js Developer based in India. I specialize in Front end development in React Framework, <br></br>Python Development,Hosting and am passionate about creating Awesome Website Designing</p>
                                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                            <div className="item">
                                                <img className='imgskill' src={Rskill} alt="Imageg" />
                                                <h5>React Js</h5>
                                            </div>
                                            <div className="item">
                                                <img className='imgskill' src={Dskill} alt="Image1" />
                                                <h5>Django</h5>
                                            </div>
                                            <div className="item">
                                                <img className='imgskill' src={cskill} alt="Image2" />
                                                <h5>CSS</h5>
                                            </div>
                                            <div className="item">
                                                <img className='imgskill' src={hskill} alt="Image3" />
                                                <h5>HTML 5</h5>
                                            </div>
                                        </Carousel><br></br><br></br><br></br>
                                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                            <div className="item">
                                                <img className='imgskill' src={gskill} alt="Image4" />
                                                <h5>GitHub</h5>
                                            </div>
                                            <div className="item">
                                                <img className='imgskill' src={bskill} alt="Image5" />
                                                <h5>BootStrap</h5>
                                            </div>
                                            <div className="item">
                                                <img className='imgskill' src={fskill} alt="Image6" />
                                                <h5>Firebase</h5>
                                            </div>
                                            <div className="item">
                                                <img className='imgskill' src={askill} alt="Image7" />
                                                <h5>AWS</h5>
                                            </div>
                                            <div className="item">
                                                <img className='imgskill' src={rskill} alt="Image8" />
                                                <h5>Redux</h5>
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="background-image-left" src={colorSharp} alt="Image0" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}