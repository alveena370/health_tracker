import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Data.scss";
import { useContext } from "react";
import { MedicalContext } from "../../MedicalContext";
import { Col, Row } from "react-bootstrap";

const Data = () => {
  const { currentUser, setCurrentUserV2 } = useContext(MedicalContext);
  console.log(currentUser);

  //& Deleting task function
  const deleteHandler = (unit) => {
    const filteredUnits = currentUser.units.filter(
      (item) => item.recordId !== unit.recordId
    );
    currentUser.units = filteredUnits;
    const updatedCurrentUser = currentUser;
    console.log(filteredUnits);

    setCurrentUserV2({ ...currentUser, units: filteredUnits });
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
  };

  return (
    <div className="Data">
      {currentUser.units &&
        currentUser.units.map((item, i) => (
          <Row className="row" key={i}>
            <Row className="date">{item.date}</Row>

            <Col xl="4" className="cols one">
              {item.type}
            </Col>

            <Col xl="4" className="cols two">
              <span className="measure">
                {item.number} {item.unitMeasure}
              </span>
            </Col>

            <Col xl="4" className="cols three">
              <Button
                className="button"
                onClick={() => deleteHandler(item)}
                variant="outline-danger"
              >
                Delete
              </Button>{" "}
              <NavLink to={item.recordId}>
                <Button className="button" variant="outline-success">
                  Edit
                </Button>
              </NavLink>
            </Col>
          </Row>
        ))}
    </div>
  );
};

export default Data;
