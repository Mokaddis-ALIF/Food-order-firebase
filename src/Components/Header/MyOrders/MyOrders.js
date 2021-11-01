import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
	const { users } = useAuth();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/orders`)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, []);
	const handleDelete = (id) => {
		const proceed = window.confirm('Are you sure you want to delete?');
		if (proceed) {
			const url = `http://localhost:5000/orders/${id}`;
			fetch(url, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount) {
						const remaining = orders.filter((order) => order._id !== id);
						setOrders(remaining);
						alert('Deleted');
					}
				});
		}
	};
	return (
		<Container id="myOrders">
			<div className="text-center text-warning display-4">My orders</div>
			<Row>
				{orders.map((order) => (
					<Col className="my-4 rounded shadow-sm" md={4} key={order._id}>
						<Card style={{ width: '18rem' }}>
							<ListGroup variant="flush">
								<ListGroup.Item>
									{order?.foodName}:{order?.quantity}
								</ListGroup.Item>
								<ListGroup.Item>Name: {order?.name}</ListGroup.Item>
								<ListGroup.Item>Email: {order?.email}</ListGroup.Item>
								<ListGroup.Item>Address: {order?.address}</ListGroup.Item>
								<Link to={`/update/${order._id}`}>
									<button className="btn btn-warning my-2 w-100">Update</button>
								</Link>
								<button
									onClick={() => handleDelete(order._id)}
									className="btn btn-danger"
								>
									Delete
								</button>
							</ListGroup>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default MyOrders;
