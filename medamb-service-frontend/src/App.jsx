
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./authgaurd/login";
import Signup from "./authgaurd/signup";
// import InfoAmb from "./components/InfoAmb";
import Home from "./components/home";
import AboutUs from './components/AboutUs';
import MainLayout from './layouts/MainLayout';
import ProtectedRoutes from './authgaurd/ProtectedRoutes';
import AuthLayout from './layouts/AuthLayout';
import PublicRoutes from './authgaurd/PublicRoutes';
import ChooseUser from './components/ChooseUser';

// import ProtectedRoutes from './components/ProtectedRoutes';
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
        <div className="container mt-3">
          {/* <InfoAmb /> */}
          <Routes >
            <Route element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>}>
              <Route path="/home" element={<Home />} />
            </Route>
            <Route element={<PublicRoutes><AuthLayout /></PublicRoutes>}>
              <Route path="/" element={<ChooseUser />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>


            <Route path="/about" element={<AboutUs />} />
            {/*<Route path="/helpline" element={<Helpline />} />
          <Route path="/blood-test" element={<BloodTest />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/bills" element={<Bills />} />*/}

            {/* <Route path="/InfoAmb" element={<InfoAmb />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
