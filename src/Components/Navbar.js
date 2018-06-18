import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const NavbarFunc = ({ onItemClick }) => {
	

	const positions = ['All','Quarterbacks','Running Backs', 'Wide Receivers', 'Tight Ends', 'Defenses']
	const navLinks = [0,1]

	navLinks.forEach(function(element) {
		navLinks[element] = positions.map((position) =>	<MenuItem key={position} onClick={()=>onItemClick(element, position)}>{position}</MenuItem> ); 
	})

	return (
		<div>
		 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>

			<Navbar className='navbar-fixed-top navbar-inverse '>
	          <Navbar.Header>
	              <Navbar.Brand>
	                <span>Fantasy Football</span>
				  </Navbar.Brand>
	              <Navbar.Toggle/>
	          </Navbar.Header>
	          <Navbar.Collapse>
		          <Nav>
		          	<NavItem onClick={()=>onItemClick(2)}>
		          		<span>Home</span>
		          	</NavItem>
		            <NavDropdown title="Rankings" id="basic-nav-dropdown">
		   				{navLinks[0]}
		            </NavDropdown>
		           	<NavDropdown title="Draft" id="basic-nav-dropdown">
		           		{navLinks[1]}
		            </NavDropdown>
		          </Nav>
           	  <Navbar.Text pullRight>Rankings and Draft Strategy Guide</Navbar.Text>
	          </Navbar.Collapse>
	        </Navbar>
		</div>
	)
}

export default NavbarFunc;
