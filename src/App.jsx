import Home from "./pages/Home";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
