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
                        <h4>Hi there, {user.name}!&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</h4>
                        {/* <Link to="/"><img src={NNlogo} alt="Logo" /></Link> */}
                        <Link to="/" className="nav-link">Current Reads &nbsp;&nbsp;&nbsp;&nbsp;</Link>
                        <Link to="/read" className="nav-link">Read &nbsp;&nbsp;&nbsp;</Link>
                        <Link to="/wanttoread" className="nav-link">Want To Read &nbsp;&nbsp;&nbsp;&nbsp;</Link>
                        <Link to="" onClick={handleLogOut} className="nav-link">Log Out  </Link>
                    </HStack>
                </box>
            </nav>


        </>
    );
}



