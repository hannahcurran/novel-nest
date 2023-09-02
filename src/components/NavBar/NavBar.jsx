import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import NNlogo from '../../Images/NNlogo.png';
import './NavBar.css';
import { Spacer, HStack, VStack, Box } from '@chakra-ui/react';

export default function NavBar({ user, setUser }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <>
            <nav className="nav">
                <HStack spacing='50px' width="100%" >
                    <img src={NNlogo} alt="Logo" className="logo-img" />
                    <h4>Hi there, {user.name}!</h4>
                    <Box display={{ base: "none", md: "flex" }} flexDirection={{ base: "column", md: "row" }} alignItems="center">
                        <Link to="/" className="nav-link">Current Reads</Link>
                        <Link to="/read" className="nav-link">Read</Link>
                        <Link to="/wanttoread" className="nav-link">Want To Read</Link>
                    </Box>
                    <Spacer />
                    <Box display={{ base: "none", md: "block" }}>
                        <Link to="" onClick={handleLogOut} className="nav-link">Log Out</Link>
                    </Box>
                    <Box className="hamburger-icon" display={{ base: "block", md: "none" }} onClick={() => setIsOpen(!isOpen)} color="#f70776">
                        &#9776;
                    </Box>
                </HStack>
                <VStack spacing="20px" display={{ base: isOpen ? "flex" : "none", md: "none" }} flexDirection="column">
                    <Link to="/" className="nav-link">Current Reads</Link>
                    <Link to="/read" className="nav-link">Read</Link>
                    <Link to="/wanttoread" className="nav-link">Want To Read</Link>
                    <Link to="" onClick={handleLogOut} className="nav-link">Log Out</Link>
                </VStack>
            </nav>
        </>
    );
}
