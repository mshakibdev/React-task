import React, {Fragment} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";

function NavBar() {
	return (
		<Navbar bg='secondary' variant='dark'>
			<Container>
				<Nav className='justify-content-md-center'>
					<NavLink className='nav-link ' to='/home'>
						Home
					</NavLink>
					<NavLink to='/form' className='nav-link'>
						My Form
					</NavLink>
					<NavLink to='/info' className='nav-link'>
						Info
					</NavLink>
					<NavLink to='/todo' className='nav-link'>
						Todo
					</NavLink>
					<NavLink to='/menu' className='nav-link'>
						DropDown
					</NavLink>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavBar;
