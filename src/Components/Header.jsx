import { Link, NavLink } from "react-router-dom";
// On NavLink we write faq and contact without / beacouse react router understand thier are a children to /  
function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
        <Link className="navbar-brand" to="/" end>React Router Dom V6+</Link>
            <div class="navbar-nav">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
              <NavLink className="nav-link" to="faq">FAQ</NavLink>
              <NavLink className="nav-link" to="contact">Contact</NavLink>
              <NavLink className="btn btn-warning ms-5" to="/user">Log In</NavLink>
          </div>
        </div>
      </nav>
  );
}

export default Header;
