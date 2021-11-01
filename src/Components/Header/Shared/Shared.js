import React from 'react';
import Foods from '../Foods/Foods';
import HeaderImg from '../HeaderImg/HeaderImg';
import JoinUs from '../JoinUs/JoinUs';
import OurDetails from '../OurDetails/OurDetails';

const Shared = () => {
	return (
		<div>
			<HeaderImg />
			<Foods />
			<OurDetails />
			<JoinUs />
		</div>
	);
};

export default Shared;
