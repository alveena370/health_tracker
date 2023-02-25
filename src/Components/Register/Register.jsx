import { Button, Form } from "react-bootstrap";
import "./Register.scss";
import { useRef, useContext } from "react";
import { MedicalContext } from "../../MedicalContext";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
  const { setUser, user } = useContext(MedicalContext);

  const id = uuidv4();

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const submitRegisterForm = (e) => {
    e.preventDefault();

    setUser([
      {
        userId: id,
        name: inputName.current.value,
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      },
      ...user,
    ]);
    alert("You are now registered!");

    inputName.current.value = "";
    inputEmail.current.value = "";
    inputPassword.current.value = "";
  };

  return (
    <Form onSubmit={submitRegisterForm}>
      <h2>Register</h2>
      <Form.Group className="formBox">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          type="text"
          ref={inputName}
          placeholder="Type name"
          required
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          ref={inputEmail}
          placeholder="Type email"
          required
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          ref={inputPassword}
          placeholder="Type password"
          required
        />
        <div className="Btn">
          <Button type="submit">Register</Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default Register;
