import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './FoodDetails.css';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const FoodDetails = () => {
	const { id } = useParams();
	const { users } = useAuth();

	const [foods, setFoods] = useState([]);
	useEffect(() => {
		fetch(`https://pure-fjord-44568.herokuapp.com/products`)
			.then((res) => res.json())
			.then((data) => setFoods(data));
	}, []);

	const newItem = foods.find((item) => item.id == id);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.post('https://pure-fjord-44568.herokuapp.com/orders', data)
			.then((res) => {
				if (res.data.insertedId) {
					alert('Order placed');
					reset();
				}
			});
	};

	return (
		<Container className="py-5" id="details">
			<Row>
				<Col
					sm={5}
					className="d-flex flex-column justify-content-center align-item-center"
				>
					<Row className="d-flex flex-column justify-content-center align-item-center">
						<Col md={5}>
							<div className="mx-auto">
								<Image src={newItem?.img} fluid />
							</div>
						</Col>
						<Col md={7}>
							<div className="text-start">
								<h1>{newItem?.title}</h1>
								<h3>{newItem?.category}</h3>
								<p>{newItem?.desc}</p>
								<h1>${newItem?.price}</h1>
							</div>
						</Col>
					</Row>
				</Col>
				<Col sm={7}>
					<form
						className="d-flex flex-column justify-content-center align-items-center"
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							className="m-2 p-2 w-50 rounded"
							defaultValue={users.displayName}
							{...register('name')}
						/>

						<input
							className="m-2 p-2 w-50 rounded"
							defaultValue={users.email}
							{...register('email', { required: true })}
						/>
						<input
							className="m-2 p-2 w-50 rounded"
							defaultValue={newItem?.title}
							{...register('foodName')}
						/>
						<input
							className="m-2 p-2 w-50 rounded"
							placeholder="quantity"
							type="number"
							{...register('quantity')}
						/>
						<input
							className="m-2 p-2 w-50 rounded"
							placeholder="address"
							{...register('address')}
						/>
						{errors.exampleRequired && <span>This field is required</span>}

						<input
							className="btn btn-outline-warning text-dark py-2 w-50"
							type="submit"
							value="Order"
						/>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default FoodDetails;
