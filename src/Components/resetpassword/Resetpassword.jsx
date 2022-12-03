import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetpassword } from "../../Redux/Actions/authaction";
import { Nav, Navbar, Row, Col, Form, Button, Card } from "react-bootstrap";

function Resetpassword() {
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setconfirmNewPass] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPass === "") {
      alert("Email is required");
      return;
    }
    if (confirmNewPass === "") {
      alert("Password is required");
      return;
    }
    if (newPass !== "" && confirmNewPass !== "") {
      const data = {
        newPass,
        confirmNewPass,
      };
      dispatch(resetpassword(data));
    }
  };

  return (
    <>
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
                        type="password"
                        placeholder="Password"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmNewPass}
                        onChange={(e) => setconfirmNewPass(e.target.value)}
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
    </>
  );
}

export default Resetpassword;
