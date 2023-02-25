import "./Home.scss";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="Home">
      <Row>
        <h1>
          My Medical <br /> Records
        </h1>
      </Row>
      <Row className="rowContainer">
        <Register />
        <Login />
      </Row>
    </Container>
  );
};

export default Home;
