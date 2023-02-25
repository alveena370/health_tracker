import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Edit from "./Components/Edit/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="main">
          <Route index element={<Main />} />
          <Route path=":recordId" element={<Edit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
