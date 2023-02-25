import { Button } from "react-bootstrap";
import logo from "../../img/pink-pic.jpg";
import { useContext } from "react";
import { MedicalContext } from "../../MedicalContext";
import "./Logout.scss";

const Logout = () => {
  const { setCurrentUser } = useContext(MedicalContext);
  return (
    <div className="Logout">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <Button
        className="logOut"
        onClick={(e) => {
          setCurrentUser({});
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default Logout;
