import "./Main.scss";
import Data from "../Data/Data";
import { useContext, useEffect, useRef } from "react";
import { MedicalContext } from "../../MedicalContext";
import DataGraph from "../Graph/DataGraph";
import { Form, FormControl, Container, Row, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  //! Hide and show text
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const inputValueBp = useRef();
  const inputValueHeartRate = useRef();
  const inputValueSugar = useRef();
  const inputValueOxygen = useRef();
  const inputValueWeight = useRef();
  const inputValueDate = useRef();

  const { currentUser, user, setUser, setCurrentUserV2 } =
    useContext(MedicalContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const findUser = user.find(
      (theOne) => theOne.userId === currentUser.userId
    );

    const check = findUser.units || [];
    findUser.units = [
      {
        date: inputValueDate.current.value,
        recordId: uuidv4(),
        number: inputValueHeartRate.current.value,
        type: "HeartRate",
        unitMeasure: "Bpm",
      },
      {
        recordId: uuidv4(),
        number: inputValueOxygen.current.value,
        type: "Oxygen",
        unitMeasure: "mgL",
      },
      {
        recordId: uuidv4(),
        number: inputValueBp.current.value,
        type: "Blood pressure",
        unitMeasure: "mmHg",
      },
      {
        recordId: uuidv4(),
        number: inputValueSugar.current.value,
        type: "Sugar",
        unitMeasure: "mmol/L",
      },
      {
        recordId: uuidv4(),
        number: inputValueWeight.current.value,
        type: "Weight",
        unitMeasure: "kg",
      },
      ...check,
    ];
    console.log(findUser);

    const updatedCurrentUser = user.filter(
      (item) => item.userId !== currentUser.userId
    );

    updatedCurrentUser.push(findUser);

    setUser(updatedCurrentUser);
    setCurrentUserV2(findUser);

    inputValueDate.current.value = "";
    inputValueHeartRate.current.value = "";
    inputValueBp.current.value = "";
    inputValueOxygen.current.value = "";
    inputValueWeight.current.value = "";
    inputValueSugar.current.value = "";

    alert("Your records are saved");
  };

  //^ Hide function
  const hideHandler = () => {
    setShow(false);
  };

  //^ Show function
  const showHandler = () => {
    setShow(true);
  };

  useEffect(() => {
    if (Object.keys(currentUser).length === 0) {
      // console.log(currentUser);
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div className="Main">
      <Header />

      <Container>
        {/* <Logout /> */}
        <Row className="wrapper">
          <h3>Hello {currentUser.name}, please note down your records</h3>
          <Form onSubmit={submitHandler}>
            <label>Select a date</label>
            <br />
            <FormControl
              ref={inputValueDate}
              type="date"
              className="date-select"
              required
            />
            <ListGroup className="input-container">
              <ListGroup.Item variant="danger">
                <label>Weight</label>
                <FormControl
                  ref={inputValueWeight}
                  type="number"
                  placeholder="Your Record..."
                  min={0}
                />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="input-container">
              <ListGroup.Item variant="secondary">
                <label>Heart Rate</label>
                <FormControl
                  ref={inputValueHeartRate}
                  type="number"
                  placeholder="Your Record..."
                  min={0}
                />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="input-container">
              <ListGroup.Item variant="danger">
                <label>Blood Pressure</label>
                <FormControl
                  ref={inputValueBp}
                  type="number"
                  placeholder="Your Record..."
                  min={0}
                />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="input-container">
              <ListGroup.Item variant="secondary">
                <label>Sugar</label>
                <FormControl
                  ref={inputValueSugar}
                  type="number"
                  placeholder="Your Record..."
                  min={0}
                />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="input-container">
              <ListGroup.Item variant="danger">
                <label>Oxygen</label>
                <FormControl
                  ref={inputValueOxygen}
                  type="number"
                  placeholder="Your Record..."
                  min={0}
                />
              </ListGroup.Item>
            </ListGroup>
            <Button type="submit" variant="outline-success">
              Save
            </Button>{" "}
            <Button onClick={showHandler} variant="outline-info">
              Show
            </Button>{" "}
            <Button onClick={hideHandler} variant="outline-danger">
              Hide
            </Button>
          </Form>
        </Row>

        <Row className="data-wrapper">
          {!currentUser.units && <h4>No records yet</h4>}
          {currentUser.units && <h4>My records</h4>}
          {show && <Data />}
          {show && <DataGraph />}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
