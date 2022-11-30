import React from "react";
import Navigation from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Nav, Navbar, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../Login/login.css";

const Login = () => {
  return (
    <>
      <Navigation />

      <div className="content-center-test d-flex justify-content-center">
        <Card className="d-flex justify-content-center col-md-8 col-sm-11">
          <Card.Body>
            <Row>
              <Col>
                <Nav className="">
                  <Navbar.Brand className="mb-3">
                    <h4>Log in to your Account</h4>
                  </Navbar.Brand>
                </Nav>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>

      <Footer />
    </>
  );
};

export default Login;
