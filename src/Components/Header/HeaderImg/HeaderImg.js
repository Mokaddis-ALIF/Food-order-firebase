import React from 'react';
import { Container, Image } from 'react-bootstrap';
import photo from '../../../Images/bannerbackground.png';

const HeaderImg = () => {
	return (
		<Container fluid>
			<Image src={photo} fluid />
		</Container>
	);
};

export default HeaderImg;
