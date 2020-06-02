import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Radio, Space } from 'antd';
import { Col, Row, Container } from 'react-bootstrap';
import { useDispatch, connect } from 'react-redux';
import { BottomNav } from '../BottomNav';

import styled from 'styled-components';
const StyledSwitch = styled.button`
	width: 80px;
	height: 79px;
	background: #e7f7ff 0% 0% no-repeat padding-box;
	border: 1px solid #5b55ff;
	border-radius: 5px;
	opacity: 1;
`;

const Box = styled.div`
	top: 920px;
	left: 650px;
	width: 546px;
	min-height: 100px;

	background: ${(props) => (props.stat === "I'm still searching" ? '#FFFF' : '#edf3f8 0% 0% no-repeat padding-box')};

	border: ${(props) => (props.stat === "I'm still searching" ? '1px solid #FF6C6C' : '1px solid #51a4fb')};
	border-radius: 15px;
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
const layout = {
	labelCol: { span: 18 },
	wrapperCol: { span: 16 }
};

const Form4 = ({ next, prev, payment_option, rent_info }) => {
	// console.log(props);
	const [ accStat, setAcc ] = useState(1);
	const [ rc, setRc ] = useState('');
	const dispatch = useDispatch();
	const [ form ] = Form.useForm();
	const validateMessages = {
		required: 'This field is required!',
		types: {
			email: 'Not a validate email!',
			number: 'Not a validate number!'
		}
		// number: {
		// 	range: `Must be between ${min} and ${max}`
		// }
	};

	useEffect(
		() => {
			// const data = JSON.parse(localStorage.getItem('rent'));
			// const test = JSON.parse(localStorage.getItem('payment'))
			window.scrollTo(0, 0);
			if (payment_option) {
				form.setFieldsValue({ acct_stat_show: payment_option.acct_stat });
				setAcc(payment_option.acct_stat);
			}

			if (rent_info) {
				form.setFieldsValue({
					acct_stat_show: payment_option.acct_stat,
					home_address: rent_info.home_address,
					last_rent_amount: rent_info.last_rent_amount || '',
					duration: rent_info.duration,
					property_address: rent_info.property_address || '',
					rent_collector: rent_info.rent_collector,
					pay_type: rent_info.pay_type
				});
			}
		},
		[ form ]
	);

	const RC = () => {
		return (
			<div>
				<Form.Item name={[ 'rent_collector' ]} label="Who did you pay to?" rules={[ { required: true } ]}>
					<Radio.Group
						onChange={(e) => {
							setRc(e.target.value);
						}}
					>
						{/* rc => rent colector */}

						<StyledRadio type="button" className="" switch="Landlord" stat={rc}>
							<Radio className="fg" value="Landlord">
								Landlord
							</Radio>
						</StyledRadio>

						<StyledRadio type="button" className="mr-3" switch="Caretaker" stat={rc}>
							<Radio value="Caretaker">Caretaker</Radio>
						</StyledRadio>

						<StyledRadio type="button" switch="Agent" stat={rc}>
							<Radio value="Agent">Agent</Radio>
						</StyledRadio>
					</Radio.Group>
				</Form.Item>
			</div>
		);
	};

	const AccmStatus = () => {
		if (accStat === "I'm still searching") {
			return (
				<div>
					<div className="reject-stat-child">!</div>
				</div>
			);
		} else if (accStat === 'Want to pay for a new place') {
			return (
				<div>
					<Form.Item
						name={[ 'property_address' ]}
						label="What’s the address of the property you just found?"
						rules={[ { required: true } ]}
					>
						<Input style={{ width: '100%' }} />
					</Form.Item>
					<RC />
				</div>
			);
		} else {
			return (
				<div>
					<Form.Item
						name={[ 'last_rent_amount' ]}
						label="How much was your last rent?"
						rules={[ { required: true } ]}
					>
						<Input addonBefore="₦" />
					</Form.Item>

					<RC />

					<Form.Item name={[ 'pay_type' ]} label="How did you pay?" rules={[ { required: true } ]}>
						<Select size="large" style={{ width: '96%' }} placeholder="Select how you paid">
							<Select.Option value="card">Card</Select.Option>
							<Select.Option value="bank">Bank Transfer</Select.Option>
						</Select>
					</Form.Item>
				</div>
			);
		}
	};

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
		dispatch({
			type: 'ADD_APPL',
			data: { rent_info: { ...values }, page: 3 }
		});
		next();
		// message.success("Processing complete!")
	};

	return (
		<Form
			form={form}
			className="mt-2 "
			{...layout}
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
			layout="vertical"
		>
			<Form.Item
				name={[ 'home_address' ]}
				label="What's your current home address?"
				rules={[ { required: true } ]}
			>
				<Input />
			</Form.Item>

			<Form.Item label="How long have you lived here?" name={[ 'duration' ]}>
				<Radio.Group buttonStyle="solid">
					<Radio.Button value={1}>
						<p>
							<strong>1</strong>
						</p>
						<p>Year</p>
					</Radio.Button>
					<Radio.Button value={2}>
						<p>2</p>
						<p>Years</p>{' '}
					</Radio.Button>
					<Radio.Button value={3}>
						<p>3</p>
						<p>Years</p>{' '}
					</Radio.Button>
					<Radio.Button value={4}>
						<p>4</p>
						<p>Years</p>{' '}
					</Radio.Button>
					<Radio.Button value={5}>
						<p>5</p>
						<p>Years</p>{' '}
					</Radio.Button>
				</Radio.Group>
			</Form.Item>
			{/* <Form.Item
						name={[ 'acc_status_show' ]}
						label="What's your accomodation status?"
						rules={[ { required: true } ]}
					>
				<Select size='large' value='Looking to renew my rent' style={{width: '65%'}} disabled placeholder='Looking to renew my rent'>
					
					<Select.Option  value='Looking to renew my rent'>
					Looking to renew my rent
					</Select.Option>
				
			</Select> 
		
					</Form.Item>	<a><span className='ml-3'><small onClick={()=> next(0)}>Change?</small></span></a> */}
			{/* <Form.Item  label="What's your accomodation status?" name={[ 'acc_stat_show' ]}  >
				<Select size='large'
				//  value={accStat} 
				value='hhhh'
				 style={{width: '65%'}} >
					
					<Select.Option  value='card'>
						Card
						</Select.Option>
						<Select.Option  value='bank'>
						Bank Transfer
						</Select.Option>
				</Select>
			</Form.Item> */}

			<Form.Item name={[ 'acc_stat_show' ]} label="What's your accomodation status?">
				<Space size="small">
					<Select size="large" value={accStat} style={{ width: '105%' }} placeholder={accStat} disabled>
						<Select.Option value="card">Card</Select.Option>
						<Select.Option value="bank">Bank Transfer</Select.Option>
					</Select>
					<a>
						<span className="ml-3">
							<small onClick={() => next(0)}>Change?</small>
						</span>
					</a>
				</Space>
			</Form.Item>

			{/* {accStat === "I'm still searching" ? <Reject /> : ''} */}
			<Box stat={accStat}>
				<Container className="mt-3 ml-3">
					<AccmStatus />
				</Container>
			</Box>

			{/* <StyledSwitch className="mr-4">
					<Col>
						<strong className="switch-text">1</strong>
					</Col>
					<Col>
						<p className="switch-text">Year</p>
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
				</StyledSwitch> */}
			{/* <Form.Item
						name={[ 'employer_address' ]}
						label="Employer or Business address"
						rules={[ { required: true } ]}
					>
						<Input  />
					</Form.Item> */}

			<BottomNav prev={prev} />
		</Form>
	);
};
const mapStateToProps = (state) => ({
	payment_option: state.application.payment_option,
	rent_info: state.application.rent_info
});

export default connect(mapStateToProps)(Form4);
