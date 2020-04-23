import React from 'react';
import { ProgressBar } from 'react-bootstrap';

import styled from 'styled-components';

const Head = styled.p`
	font: Bold 30px/37px Rubik;
	letter-spacing: 0px;
	color: #5b55ff;
	opacity: 1;
`;
export const Heading = ({ step, progress, title, sub }) => (
	<div>
		<small>Step {step}</small>
		<Head className="mb-2">{title}</Head>

		<ProgressBar now={progress} className="mb-2" max={120} />
		<p className="text-muted">{sub}</p>
		<br />
	</div>
);
