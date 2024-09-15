import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-success">
    <div className="container">
      <Link className="navbar-brand text-white" to="/">MyApp</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-info text-white px-3" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-info text-white px-3" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-info text-white px-3" to="/helpline">Helpline</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-info text-white px-3" to="/blood-test">Blood Test</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-info text-white px-3" to="/booking">Booking</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-info text-white px-3" to="/bills">Bills</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-info text-white px-3" to="/InfoAmb">Info</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-danger text-white" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header
