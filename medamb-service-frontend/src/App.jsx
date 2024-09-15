
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Login from "./authgaurd/login";
import Signup from "./authgaurd/signup";
import InfoAmb from "./components/InfoAmb";
import Home from "./components/home";
import AboutUs from './components/AboutUs';
function App() {
  // const About = () => <h2>About Us</h2>;
  // const Helpline = () => <h2>Helpline</h2>;
  // const BloodTest = () => <h2>Blood Test</h2>;
  // const Booking = () => <h2>Booking</h2>;
  // const Bills = () => <h2>Bills</h2>;
  // const Login = () => <h2>Login Page</h2>;


  return (
    <>
    <Router>
    <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/*<Route path="/helpline" element={<Helpline />} />
          <Route path="/blood-test" element={<BloodTest />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/bills" element={<Bills />} />*/}
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/InfoAmb" element={<InfoAmb />} />
        </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App
