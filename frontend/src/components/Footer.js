// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#343a40",
    color: "white",
    padding: "40px 0",
    textAlign: "center",
    width: "100%",
    marginTop: "40px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
  };

  const iconStyle = {
    color: "white",
    fontSize: "20px",
    margin: "0 10px",
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md={3}>
            <h5>About Us</h5>
            <p>
              We are a leading e-commerce company providing top-notch products
              to our customers. Our mission is to deliver high-quality products
              and exceptional customer service.
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="/" style={linkStyle}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" style={linkStyle}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" style={linkStyle}>
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" style={linkStyle}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" style={linkStyle}>
                  FAQ
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Email: info@xecs.com</p>
            <p>Phone: +017xxxxxx</p>
            <div>
              <a href="https://facebook.com" style={iconStyle}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" style={iconStyle}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" style={iconStyle}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" style={iconStyle}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h5>Newsletter</h5>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="mb-0">© 2024 XECS. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
