import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { MedicalContextProvider } from "./MedicalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MedicalContextProvider>
      <App />
    </MedicalContextProvider>
  </React.StrictMode>
);
