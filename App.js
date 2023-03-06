import Navbar from "./Navbar/Navbar";
import './App.css'
import Herosec from "./HeroSec/Herosec";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={[<Navbar />, <Herosec />]}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
