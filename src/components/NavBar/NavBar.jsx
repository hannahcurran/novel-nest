import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
<>
        <nav >
            <span>LOGO HERE</span>
            &nbsp; | &nbsp;
            <Link to="/books">Currently Reading </Link>
            &nbsp; | &nbsp;
           <Link to="/books/read">Read </Link>
            &nbsp; | &nbsp;
            <Link to="/books/wanttoread">Want To Read </Link>
            &nbsp; | &nbsp;

            <Link to="" onClick={handleLogOut}>Log Out</Link>
            </nav>

      

            {/* <nav class="navbar bg-light">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <span>LOGO HERE</span>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> <Link to="/books">Currently Reading </Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to="/books/read">Read </Link></a>
                        </li>
                        <li class="nav-item">
                            <Link to="/books/wanttoread">Want To Read </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container-fluid mt-3"></div> */}


      

        </>
                );
}