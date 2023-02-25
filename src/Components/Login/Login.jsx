import "./Login.scss";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { MedicalContext } from "../../MedicalContext";

const Login = () => {
  const { user, setCurrentUser } = useContext(MedicalContext);

  const navigate = useNavigate();

  const inputLoginEmail = useRef(null);
  const inputLoginPassword = useRef(null);

  const submitLoginForm = (e) => {
    e.preventDefault();
    const us = user.find(
      (u) =>
        u.email === inputLoginEmail.current.value &&
        u.password === inputLoginPassword.current.value
    );
    if (us) {
      // set current user in local storage
      setCurrentUser(us);
      navigate("/main");
    } else {
      alert("You are not registered or your Email or Password is wrong");
    }

    inputLoginPassword.current.value = "";
  };

  return (
    <Form onSubmit={submitLoginForm}>
      <h2>Log in</h2>
      <Form.Group className="formBox">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          ref={inputLoginEmail}
          placeholder="Type email"
          required
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          ref={inputLoginPassword}
          placeholder="Type password"
          required
        />
        <div className="Btn">
          <Button type="submit">Log in</Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default Login;
