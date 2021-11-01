import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import our1 from '../../../../Images/our1.png';
// import our1 from '../../../Images/Image/';

// import our2 from '../../../Images/our2.png';
// import our3 from '../../../Images/our3.png';
import './OurDetails.css';
import delivery from '../../../Images/ICON/Group 245.png';
import train from '../../../Images/ICON/Group 204.png';
import ring from '../../../Images/ICON/Group 1133.png';
import Button from 'react-bootstrap/Button';

const OurDetails = () => {
	return (
		<Container className="pb-3">
			<div>
				<h1 className="text-start text-warning">Why Choose us</h1>
			</div>
			<Container>
				<Row>
					<Col xs={6} md={4}>
						<div style={{ width: '18rem' }}>
							<Image
								src="https://image.shutterstock.com/image-photo/excited-man-chef-cook-wearing-260nw-1244059981.jpg"
								fluid
							/>
							<div className="main">
								<Row className="pt-3">
									<Col md={3}>
										<Image src={delivery} fluid />
									</Col>
									<Col md={9} className="text-start">
										<h5>Professional Cook</h5>
										<p>
											Expect to have a delicious meal from our professional cook
										</p>
										<div>
											<Button variant="outline-info" size="sm">
												See More
											</Button>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
					<Col xs={6} md={4}>
						<div style={{ width: '18rem' }}>
							<Image
								src="https://cdn2.vectorstock.com/i/1000x1000/66/56/fast-food-delivery-service-isolated-icon-man-vector-26306656.jpg"
								fluid
							/>
							<div className="main">
								<Row className="pt-3">
									<Col md={3}>
										<Image src={train} fluid />
									</Col>
									<Col md={9} className="text-start">
										<h5>A Good Responder</h5>
										<p>24/7 service with fast response</p>
										<div>
											<Button variant="outline-info" size="sm">
												See More
											</Button>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
					<Col xs={6} md={4}>
						<div style={{ width: '18rem' }}>
							<Image
								src="https://image.freepik.com/free-vector/cartoon-kid-cook_10308-227.jpg"
								fluid
							/>
							<div className="main">
								<Row className="pt-3">
									<Col md={3}>
										<Image src={ring} fluid />
									</Col>
									<Col md={9} className="text-start">
										<h5>Home fast Delivery</h5>
										<p>We will make sure to deliver as fast as possible</p>
										<div>
											<Button variant="outline-info" size="sm">
												See More
											</Button>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default OurDetails;
