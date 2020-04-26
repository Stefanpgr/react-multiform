import React, { useState } from 'react';
import { Container, Col, InputGroup, FormControl } from 'react-bootstrap';
import { Radio } from 'antd';
import {BottomNav} from '../BottomNav'
import styled from 'styled-components';
const StyledSwitch = styled.button`
		width: 80px;
		height: 79px;
		background: #e7f7ff 0% 0% no-repeat padding-box;
		border: 1px solid #5b55ff;
		border-radius: 5px;
		opacity: 1;
	`;


	const StyledRadio = styled.button`
		background: ${(props) => (props.switch === props.stat ? '#e7f7ff' : 0)};

		border: ${(props) => (props.switch === props.stat ? '1px solid #5b55ff' : 0)};

		border-radius: 5px;
		font-family: Rubik, 'sans-serif';
		color: #878787;
		opacity: 1;
		padding: 9px 0px 8px 15px;
	`;

const Form1 = ({ next, current }) => {
	const [ accStat, setAcc ] = useState(1);
	// const [ form ] = Form.useForm();

	// const onFinish = (values) => {
	// 	console.log('Received values of form: ', values);
	// };

	return (
		<div style={{ maxWidth: '782px' }}>
	
				
				{/* <small>Step 1</small>
				<Head className="mb-2">Payment Option</Head>

				<ProgressBar now={25} className="mb-2" /> */}

				<p className="p-question">What’s your accommodation status?</p>
				<Radio.Group
					onChange={(e) => {
						setAcc(e.target.value);
					}}
					name="radiogroup"
					defaultValue={1}
				>
					<StyledRadio className="mr-3 fg" switch={1} stat={accStat}>
						<Radio className="fg" value={1}>
							Looking to renew my rent
						</Radio>
					</StyledRadio>

					<StyledRadio className="mr-3" switch={2} stat={accStat}>
						<Radio value={2}>Want to pay for a new place</Radio>
					</StyledRadio>

					<StyledRadio switch={3} stat={accStat}>
						<Radio value={3}>I'm still searching</Radio>
					</StyledRadio>
				</Radio.Group>

				<p className="p-question mt-3">How much is your rent request amount?</p>
				<InputGroup className="mb-3" style={{ width: '50%' }}>
					<InputGroup.Prepend>
						<InputGroup.Text id="basic-addon1">₦</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl placeholder="Enter amount" aria-label="Username" aria-describedby="basic-addon1" />
				</InputGroup>

				<p className="p-question mt-3">How much do you earn monthly?</p>
				<InputGroup className="mb-3" style={{ width: '50%' }}>
					<InputGroup.Prepend>
						<InputGroup.Text id="basic-addon1">₦</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl placeholder="Enter amount" aria-label="Enter amount" aria-describedby="basic-addon1" />
				</InputGroup>
				<p className="p-question mt-3">Choose a monthly plan</p>
				<StyledSwitch className="mr-4">
					<Col>
						<strong className="switch-text">1</strong>
					</Col>
					<Col>
						<p className="switch-text">Month</p>
					</Col>{' '}
				</StyledSwitch>
				<StyledSwitch className="mr-4">
					<Col>
						<strong className="switch-text">3</strong>
					</Col>
					<Col>
						<p className="switch-text">Months</p>
					</Col>{' '}
				</StyledSwitch>
				<StyledSwitch>
					<Col>
						<strong className="switch-text">6</strong>
					</Col>
					<Col>
						<p className="switch-text">Months</p>
					</Col>{' '}
				</StyledSwitch>

				<p className="mt-3">See payment breakdown ></p>
				{/* <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
					<Form.Item>
						{' '}
						<Radio.Group onChange={(e) => setAcc(e.target.value)} name="radiogroup" defaultValue={1}>
							<StyledRadio className="mr-3">
								<Radio value={1}>Looking to renew my rent</Radio>
							</StyledRadio>

							<StyledRadio className="mr-3">
								<Radio value={2}>Want to pay for a new place</Radio>
							</StyledRadio>

							<StyledRadio>
								<Radio value={3}>I'm still searching</Radio>
							</StyledRadio>
						</Radio.Group>
					</Form.Item>

					<Form.Item className="p-question">How much is your rent request amount?</Form.Item>
					<br />
					<Form.Item
						name="salary"
						rules={[ { required: true, message: 'Please input your salary amount!' } ]}
					>
						<Input addonBefore="http://" placeholder="Enter Amount" />
					</Form.Item>
				</Form> */}
			<BottomNav current={current} />
	
		</div>
	);
};

export default Form1;
