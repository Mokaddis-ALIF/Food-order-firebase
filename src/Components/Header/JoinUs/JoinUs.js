import React from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';

import './JoinUs.css';

const JoinUs = () => {
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();
	const { users } = useAuth();
	const onSubmit = (data) => console.log(data);
	return (
		<Container id="join">
			<div className="display-4 text-warning text-center">Join us</div>
			<Row className="d-flex flex-row justify-content-center align-items-center">
				<Col md={8}>
					<div className="d-flex flex-row justify-content-center align-items-center">
						<form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
							<input
								placeholder="Name"
								defaultValue={users?.displayName}
								{...register('name')}
							/>

							<input
								placeholder="Email"
								defaultValue={users?.email}
								{...register('email', { required: true })}
							/>
							{errors.email && (
								<span className="error">This field is required</span>
							)}
							<input
								placeholder="Foods you like"
								defaultValue=""
								{...register('foods')}
							/>
							<input
								placeholder="Address"
								defaultValue=""
								{...register('address')}
							/>
							<input
								placeholder="Gender"
								defaultValue=""
								{...register('gender')}
							/>

							<input
								className="btn btn-outline-warning"
								type="submit"
								value="Join Us"
							/>
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default JoinUs;
