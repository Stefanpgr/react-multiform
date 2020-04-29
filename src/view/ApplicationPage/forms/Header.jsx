import React from 'react';
import { ProgressBar } from 'react-bootstrap';
// import { useSelector } from ' react-redux';

import styled from 'styled-components';

const Head = styled.p`
	font: Bold 26px/33px Rubik;
	letter-spacing: 0px;
	color: #00204f;
	opacity: 1;
`;
export const Heading = ({ step, progress, title, sub }) => (
	<div>
		<small style={{ color: '#878787', letterSpacing: '0px' }}>You are getting up your account</small>
		<Head className="mb-2">{title}</Head>
		<p className="text-muted" style={{ fontSize: '15px', letterSpacing: '0px', opacity: '1' }}>
			{sub}{' '}
			<span style={{ float: 'right', fontSize: '14px', letterSpacing: '0px', opacity: '1' }}>
				Step {step} of 6
			</span>
		</p>
		<ProgressBar variant="success" now={progress} className="mb-2" max={100} />
	</div>
);
