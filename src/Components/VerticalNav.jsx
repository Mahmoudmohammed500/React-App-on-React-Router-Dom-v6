import '../App.css';
import { NavLink } from "react-router-dom";
// On NavLink we write faq and contact without / beacouse react router understand thier are a children to /  
function VerticalNav() {
    return (
        <nav class="navbar navbar-dark bg-dark align-items-start navHeightWidth">
            <div class="container d-flex flex-column">
                <div class="navbar-nav">
                    <NavLink className="nav-link ms-auto me-auto" to="/user" end>Home</NavLink>
                    <NavLink className="nav-link ms-auto me-auto" to="info">Info</NavLink>
                    <NavLink className="nav-link ms-auto me-auto" to="edit">Edit</NavLink>
                    <NavLink className="btn btn-danger" to="/">Log Out</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default VerticalNav;
