import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import NNlogo from '../../Images/NNlogo.png';
import './NavBar.css';
// import '../../pages/App/App.css';
import { Spacer, HStack } from '@chakra-ui/react';


export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <>
            <nav >
                <box>
                    <HStack spacing='20px'>
                        <img src={NNlogo} alt="Logo" className="logo-img" />
                        <h4>Hi there, {user.name}!</h4>&nbsp; &nbsp; 
                        {/* <Link to="/"><img src={NNlogo} alt="Logo" /></Link> */}
                        <Link to="/books" className="nav-link">Current Reads </Link>
                        <Link to="/books/read" className="nav-link">Read </Link>
                        <Link to="/books/wanttoread" className="nav-link">Want To Read </Link>
                        <Link to="" onClick={handleLogOut} className="nav-link">Log Out  </Link>
                    </HStack>
                </box>
            </nav>


        </>
    );
}



