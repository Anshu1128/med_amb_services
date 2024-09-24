import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { deleteSession } from '../services/session';
// import { assets } from '../assets/assets_frontend/assets';
const Header = () => {
  const { isLoggedIn, loading, user, setIsLoggedIn, setUser } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    deleteSession();
    setIsLoggedIn(false);
    setUser(null);
    navigate('/login')

  }
  return (
    <nav className="navbar  navbar-expand-lg navbar-info bg-info light">
      <div className="container">
        <Link className="navbar-brand text-white" to="/home"><strong>MedAmb+24</strong></Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-danger text-white px-3" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-danger text-white px-3" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-danger text-white px-3" to="/helpline">Helpline</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-danger text-white px-3" to="/blood-test">Blood Test</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-danger text-white px-3" to="/booking">Booking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-danger text-white px-3" to="/bills">Bills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-danger text-white px-3" to="/InfoAmb">Info</Link>
            </li>
          </ul>
          {/* <ul className="navbar-nav ml-auto">
            {!loading && isLoggedIn ? <li className="nav-item m-auto">
              {user?.name}<button className='btn btn-danger btn-sm' onClick={handleLogOut}>Log Out</button>
            </li> : <li className="nav-item">
              <Link className="nav-link btn btn-outline-danger text-white" to="/login">Login</Link>
            </li>}
          </ul> */}
          <ul className="navbar-nav">
            {!loading && isLoggedIn ? (
              <div>
                <strong className="font-bold text-justify" type="text">
                  Welcome {user?.name}
                </strong>

                <a className="btn btn-outline-warning border-x-stone-700 font-bold text-justify" onClick={handleLogOut}>Log out</a>

              </div>
            ) : (
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-danger text-white" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
    // <div className='flex items-center justify-between py-4 mb-5 border-b border-b-gray-400'>
    //   <img src={assets.medamb} alt="" />
    //   <ul>
    //     <NavLink>
    //       <li>Home</li>
    //       <hr />
    //     </NavLink>
    //     <NavLink>
    //       <li>About</li>
    //       <hr />
    //     </NavLink>
    //     <NavLink>
    //       <li>Helpline</li>
    //       <hr />
    //     </NavLink>
    //     <NavLink>
    //       <li>Bills</li>
    //       <hr />
    //     </NavLink>
    //     <NavLink>
    //       <li>Info Ambulance</li>
    //       <hr />
    //     </NavLink>
    //   </ul>
    //   <div>
    //     <button className='font-bold'>
    //       Login
    //     </button>
    //   </div>

    // </div>
  )
}

export default Header
