import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom"
function Navbar(){
    const navigate=useNavigate();
    const handleLogout=()=>{
        Cookies.remove("token");
        navigate('/login');
    }
    return (
  <nav className="navbar">
    <h1 className="brand-name">
      Go Business
    </h1>

    <div className="nav-actions">
      <button className="primary-btn">
        Try for Free
      </button>

      <button
        className="outline-btn"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  </nav>
);
}
export default Navbar;