import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Marketing from "./pages/Marketing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Press from "./pages/Press";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
