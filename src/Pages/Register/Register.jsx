import React from "react";
import Navigation from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

//style
import { Nav, Navbar, Row, Col, Form, Button, Card } from "react-bootstrap";

const Register = () => {

    return (
        <>
            <Navigation />

                <div className="content-center d-flex justify-content-center">
                    <Card className="d-flex justify-content-center col-md-8 col-sm-11">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Nav className="">
                                    <Navbar.Brand className="mb-3"><h4>Log in to your Account</h4></Navbar.Brand>
                                    </Nav>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                        />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="">
                                        <Form.Control
                                            type="input"
                                            placeholder="Enter First Name"
                                        />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="">
                                        <Form.Control
                                            type="input"
                                            placeholder="Enter Last Name"
                                        />
                                        </Form.Group>
            
            
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                        />
                                        </Form.Group>
            
                                        <Button variant="primary"  type="submit">
                                            Register
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

export default Register;
