import {Link} from "react-router-dom"

function NotFound() {
  return (
    <div className="bg">
      <h3>404</h3>
      <p>Page Not Found</p>
      <Link className="clr" to="/">Back to Dashboard</Link>
    </div>
  );
}

export default NotFound;