import React, {Fragment} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function NavBar() {
	return (
		<Fragment>
			<Navbar bg='secondary' variant='dark'>
				<Container>
					<Nav className='justify-content-md-center'>
						<Nav.Link style={{color: "white"}}>Home</Nav.Link>
						<Nav.Link style={{color: "white"}}>My Form</Nav.Link>
						<Nav.Link style={{color: "white"}}>Info</Nav.Link>
						<Nav.Link style={{color: "white"}}>Todo</Nav.Link>
						<Nav.Link style={{color: "white"}}>DropDown</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</Fragment>
	);
}

export default NavBar;
