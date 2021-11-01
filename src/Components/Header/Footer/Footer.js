import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
	return (
		<div className="bg-dark py-5">
			<Container>
				<Row>
					<Col
						md={5}
						className="d-flex flex-column align-item-between text-start"
					>
						<div className="mb-5">
							<div className="text-warning display-6">A07_FoodDelivery</div>
						</div>
						<div>
							<p className="text-white">&copy; 2021</p>
						</div>
					</Col>
					<Col id="last div" md={7}>
						<ul className="d-flex flex-row justify-content-end align-items-end  text-white">
							<li className="footer-menu mx-3">Home</li>
							<li className="footer-menu mx-3">Services</li>
							<li className="footer-menu mx-3">Contact us</li>
							<li className="footer-menu mx-3"> About us</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
