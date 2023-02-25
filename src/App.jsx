import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Edit from "./Components/Edit/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/health_tracker" element={<Home />} />
        <Route path="Main">
          <Route index element={<Main />} />
          <Route path=":recordId" element={<Edit />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
