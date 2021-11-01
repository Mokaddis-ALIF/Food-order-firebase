import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarMain.css';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const NavbarMain = () => {
	const { users, logOut } = useAuth();
	return (
		<Navbar bg="light">
			<Container>
				<div>
					<Navbar.Brand>
						<Link to="/shared" className="text-decoration-none">
							<div className="text-warning display-6">A07_FoodDelivery</div>
						</Link>
					</Navbar.Brand>
				</div>
				<div className="d-flex flex-row">
					{users.email ? (
						<div>
							<button
								onClick={logOut}
								className="btn btn-warning text-white fw-bold"
							>
								Logout
							</button>
							<NavLink
								to="/myorders"
								activeStyle={{
									fontWeight: 'bold',
									color: 'red',
								}}
								className="ms-3 text-decoration-none"
								variant="warning"
							>
								Orders-list
							</NavLink>
						</div>
					) : (
						<div>
							<NavLink
								to="/login"
								activeStyle={{
									fontWeight: 'bold',
									color: 'red',
								}}
								className="me-3"
								variant="light"
							>
								<Button className="btn btn-success text-white fw-bold">
									Login
								</Button>
							</NavLink>
							<NavLink
								to="/register"
								activeStyle={{
									fontWeight: 'bold',
									color: 'red',
								}}
								variant="danger"
							>
								<button className="btn btn-danger fw-bold">Sign up</button>
							</NavLink>
						</div>
					)}
				</div>
			</Container>
		</Navbar>
	);
};

export default NavbarMain;
