import { createContext, useState, useEffect } from "react";

export const MedicalContext = createContext(null);
const registeredUser = localStorage.getItem("registeredUser")
  ? JSON.parse(localStorage.getItem("registeredUser"))
  : [];

const defaultUnits = localStorage.getItem("allUnits")
  ? JSON.parse(localStorage.getItem("allUnits"))
  : [];

// CURRENT USER

const actualUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : {};

export const MedicalContextProvider = ({ children }) => {
  // UNITS
  const [units, setUnits] = useState(defaultUnits);
  // REGISTER
  const [user, setUser] = useState(registeredUser);

  //CURRENT USER
  const [currentUser, setCurrentUserV2] = useState(actualUser);

  // UNITS-LOCALSTORAGE

  const setCurrentUser = (user) => {
    setCurrentUserV2(user);

    // store it in db (local storage)
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  useEffect(() => {
    localStorage.setItem("allUnits", JSON.stringify(units));
    // localStorage.setItem("currentUser", JSON.stringify(actualUser));
  }, [units]);

  // REGISTER - LOCAL STORAGE

  useEffect(() => {
    localStorage.setItem("registeredUser", JSON.stringify(user));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [user, currentUser]);

  return (
    <MedicalContext.Provider
      value={{
        units,
        setUnits,
        user,
        setUser,
        currentUser,
        setCurrentUser,
        setCurrentUserV2,
      }}
    >
      {children}
    </MedicalContext.Provider>
  );
};
