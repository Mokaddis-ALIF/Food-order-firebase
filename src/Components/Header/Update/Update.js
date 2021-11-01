import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Update = () => {
	const { id } = useParams();
	const { users } = useAuth();
	const [order, setOrder] = useState({});

	useEffect(() => {
		const url = `http://localhost:5000/orders/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setOrder(data));
	}, []);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		const url = `http://localhost:5000/orders/${id}`;
		fetch(url, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert('updated');
					setOrder({});
				}
			});

		// axios.post('http://localhost:5000/orders', data).then((res) => {
		// 	if (res.data.insertedId) {
		// 		alert('Order placed');
		// 		reset();
		// 	}
		// });
	};
	return (
		<Container className="d-flex flex-column my-5 py-5">
			<h1 className="text-center text-warning">Update your order</h1>
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
					defaultValue={order?.foodName || ''}
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
					value="Update"
				/>
			</form>
		</Container>
	);
};

export default Update;
