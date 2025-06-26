import React, { useState } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Input, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../../components/firebase";
import "./login.css";

const LoginPopup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const formattedEmail = email.includes("@") ? email : `${email}@gmail.com`;

    try {
      await signInWithEmailAndPassword(auth, formattedEmail, password);
      navigate(`/submissions/${encodeURIComponent(email)}`);
    } catch (error) {
      setError("Invalid email or password");
      console.error("Error during login:", error);
    }
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = (e) => {
    if (e.target.classList.contains('overlay')) setIsOpen(false);
  };

  return (
    <div className="login-page">
      <Button type="Open" onClick={handleOpen}>
        Submissions 📝
      </Button>

      {isOpen && (
        <div className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50" onClick={handleClose}>
          <Container className="h-auto flex justify-center items-center">
            <Row className="justify-content-center align-items-center">
              <Col lg="8" md="6" sm="8">
                <div className="login-box">
                  <h3>Login to Add a Submission</h3>
                  {error && <Alert color="danger">{error}</Alert>}
                  <Form onSubmit={handleLogin}>
                    <FormGroup>
                      <Input
                        type="text"
                        placeholder="Team Name"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <div className="button-container d-flex justify-content-between">
                      <Button type="button" onClick={() => setIsOpen(false)} className="bg-secondary">
                        Cancel
                      </Button>
                      <Button type="Submit" className="bg-primary">
                        Log In
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
