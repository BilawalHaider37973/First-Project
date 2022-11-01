import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import { Home } from "./component/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
