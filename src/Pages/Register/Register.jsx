import React, { useEffect, useState } from "react";
import Navigation from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/Actions/authaction";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";

import { Nav, Navbar, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (confirm_password === "") {
      alert("confirm Password is required");
      return;
    }
    if (email !== "" && password !== "" && confirm_password !== "") {
      const data = {
        email,
        password,
        confirm_password,
      };
      dispatch(register(data));
    }
  };

  return (
    <>
      <Navigation />
      <div className="register">
        <div className="content-center d-flex justify-content-center align-items-center container">
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
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirm_password}
                        onChange={(e) => setConfirm_Password(e.target.value)}
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Register
                    </Button>
                    <div>
                      <GoogleLogin label="Sign In With Google" />
                    </div>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
