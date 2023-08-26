import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }){
function handleLogOut(){
userService.logOut();
setUser(null);
}

    return (<nav >
        <span>Welcome, {user.name}</span>
        &nbsp; | &nbsp;
        <Link to="/books">Currently Reading </Link>
        &nbsp; | &nbsp;
       <Link to="/books/read">Read </Link>
        &nbsp; | &nbsp;
        <Link to="/books/wanttoread">Want To Read </Link>
        &nbsp; | &nbsp;
        
        <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    );
}