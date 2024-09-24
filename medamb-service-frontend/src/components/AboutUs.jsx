import { Container, Row, Col } from 'react-bootstrap';
import "./AboutUs.css";
import Amb from '../public/amb.jpg';
const AboutUs = () => {
  return (
    <Container fluid className="about-us-page">
      <Row className="hero-section">
        <Col md={6} className="hero-text">
          <h1>About Us</h1>
          <p>
            Our mission is to provide high-quality medical transportation services to our patients, 
            ensuring their safety and comfort during their journey to recovery.
          </p>
        </Col>
        <Col md={6} className="hero-image">
          <img src={Amb} alt="Ambulance Hero Image" />
        </Col>
      </Row>
      <Row className="about-section">
        <Col md={6}>
          <h2>Our Story</h2>
          <p>
            Founded in [Year], our medical ambulance service has been dedicated to providing 
            exceptional patient care and transportation services to the community.
          </p>
        </Col>
        <Col md={6}>
          <h2>Our Team</h2>
          <p>
            Our team of experienced paramedics, EMTs, and medical professionals are trained to 
            provide top-notch care and compassion to our patients.
          </p>
        </Col>
      </Row>
      <Row className="testimonials-section">
        <Col md={12}>
          <h2>What Our Patients Say</h2>
          <blockquote>
          `The ambulance team was very professional and caring. They made me feel safe and 
            comfortable during my transportation.` - [Patient Name]
          </blockquote>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;