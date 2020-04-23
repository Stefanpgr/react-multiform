import React from 'react';
import AppSidebar from './AppSidebar';
import StepForm from './Steps';
import { Row, Col } from 'react-bootstrap';
const Application = () => {
	return (
		<div className="">
			<Row>
				<Col md={4}>
					<AppSidebar />
				</Col>
				<Col md={8}>
					<StepForm />
				</Col>
			</Row>
		</div>
	);
};

export default Application;
