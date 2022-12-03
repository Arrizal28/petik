import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../Redux/Actions/authaction";
import Navigation from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Nav, Navbar, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./forgotpassword.css";

function Forgotpassword() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (email !== "") {
      const data = {
        email,
      };
      dispatch(forgotPassword(data));
    }
  };

  return (
    <>
      <Navigation />
      <div className="login">
        <div className="content-center-test d-flex justify-content-center align-items-center container">
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

                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      send email
                    </Button>
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
}

export default Forgotpassword;
