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
            <nav className="nav">
                <HStack spacing='20px' width="100%">
                    <img src={NNlogo} alt="Logo" className="logo-img" />
                    <h4 >Hi there, {user.name}!</h4>
                    <Link to="/" className="nav-link">Current Reads</Link>
                    <Link to="/read" className="nav-link">Read</Link>
                    <Link to="/wanttoread" className="nav-link">Want To Read</Link>
                    
                    <Spacer />
                    <Link to="" onClick={handleLogOut} className="nav-link">Log Out</Link>
                </HStack>
            </nav>


        </>
    );
}



