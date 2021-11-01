import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Foods.css';

const Foods = () => {
	const [foods, setFoods] = useState([]);
	useEffect(() => {
		fetch('https://pure-fjord-44568.herokuapp.com/products')
			.then((res) => res.json())
			.then((data) => setFoods(data));
	}, []);
	return (
		<Container className="my-2 py-2" id="foods">
			<div className="display-5 my-4 text-center text-warning">
				Foods to order
			</div>
			<Row>
				{foods.map((food) => (
					<Col id="card" md={4} key={food.id}>
						<div className="d-flex flex-column justify-content-center align-items-center">
							<Image src={food.img} className="w-50" fluid />

							<h5 className="mt-3">{food.title}</h5>
							<p>{food.desc}</p>
							<h6>
								<b>${food.price}</b>
							</h6>
							<Link to={`/details/${food.id}`}>
								<button className="btn btn-outline-success p-2 mb-2">
									Details
								</button>
							</Link>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Foods;
