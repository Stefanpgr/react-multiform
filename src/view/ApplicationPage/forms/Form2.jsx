import React, { useState, useEffect } from 'react';
import { Form, Input, Button, InputNumber, Select, DatePicker } from 'antd';
// import CurrencyFormat from 'react-currency-format'
import {BottomNav }from '../BottomNav'

import { Col, Row } from 'react-bootstrap';

const layout = {
	labelCol: { span: 12 },
	wrapperCol: { span: 16 }
};

const Form2 = (props) => {
	// console.log(current, 'current');

	const [ form ] = Form.useForm();
	const { next, prev } = props;
	const [ accmDetails, setAccm ] = useState(false);
	const [ justFound, setJustFound ] = useState(false);
	const [ x, setX ] = useState('Landlord');
	const payDates = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31
	];

	// const [lr, setLr]= useState('')
	// const [formattedLr,setFormattedLr] = useState('')
	const validateMessages = {
		required: 'This field is required!',
		types: {
			email: 'Not a validate email!',
			number: 'Not a validate number!'
		},
		number: {
			range: 'Must be between ${min} and ${max}'
		}
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('personal'));
		if (data) {
			if (data.accomodation_status === 'I live in a house') {
				setAccm(true);
				form.setFieldsValue({
					last_rent_amount: data.last_rent_amount,
					last_rent_paytype: data.last_rent_paytype,
					rent_collector: data.rent_collector,
					rent_collector_firstname: data.rent_collector_firstname,
					rent_collector_lastname: data.rent_collector_lastname,
					rent_collector_phone: data.rent_collector_phone,
					rent_collector_address: data.rent_collector_address,
					rent_collector_bankname: data.rent_collector_bankname,
					rent_collector_acctnum: data.rent_collector_acctnum
				});
				// setFormattedLr(data.last_rent_amount)
				// setLr(data.last_rent_amount)
			} else if (data.accomodation_status === 'I just found a house') {
				setJustFound(true);
			}
		}
		// for (let i = 1; i < 32; i++) {
		// 	payDates.push(i);
		// 	console.log(i);
		// }
	}, [form]);

	// const getCity = () => {
	//   try{
	//     "http://locationsng-api.herokuapp.com/api/v1/states/lagos/cities"
	//   } catch(e){

	//   }
	// }

	const Xdetails = () => {
		if (accmDetails || justFound) {
			return (
				<div>
					<Col md="6">
						<Form.Item
							name={[ 'rent_collector_firstname' ]}
							label={`${x} Firstname`}
							rules={[ { required: true } ]}
						>
							<Input style={{ width: '100%' }} />
						</Form.Item>
					</Col>
					<Col md="6">
						<Form.Item
							name={[ 'rent_collector_lastname' ]}
							label={`${x} Lastname`}
							rules={[ { required: true } ]}
						>
							<Input style={{ width: '100%' }} />
						</Form.Item>
					</Col>

					<Col md="6">
						<Form.Item
							name={[ 'rent_collector_phone' ]}
							label={`${x}'s Phone`}
							rules={[ { required: true } ]}
						>
							<Input style={{ width: '100%' }} />
						</Form.Item>
					</Col>
					<Col md="6">
						<Form.Item
							name={[ 'rent_collector_address' ]}
							label={`${x}'s Address`}
							rules={[ { required: true } ]}
						>
							<Input style={{ width: '100%' }} />
						</Form.Item>
					</Col>
					<Col md="6">
						<Form.Item
							name={[ 'rent_collector_bankname' ]}
							label={`${x}'s Bank Name`}
							rules={[ { required: true } ]}
						>
							<Select>
								<Select.Option value="Access Bank">Access Bank</Select.Option>
							</Select>
						</Form.Item>
					</Col>
					<Col md="6">
						<Form.Item
							name={[ 'rent_collector_acctnum' ]}
							label={`${x}'s Account Number`}
							rules={[ { required: true } ]}
						>
							<Input />
						</Form.Item>
					</Col>
				</div>
			);
		} else {
			return <div />;
		}
	};

	const JustFound = () => {
		if (justFound) {
			return (
				<div>
					<Col md="6">
						<Form.Item
							name={[ 'rent_collector' ]}
							label="Who will you pay your rent to?"
							rules={[ { required: true } ]}
						>
							<Select
								onChange={(e) => {
									if (e === 'Landlord') {
										setX('Landlord');
									} else if (e === 'Caretaker') {
										setX('Caretaker');
									} else if (e === 'Estate Agent') {
										setX('Agent');
									}
								}}
							>
								<Select.Option value="Landlord">Landlord</Select.Option>
								<Select.Option value="Caretaker">Caretaker</Select.Option>
								<Select.Option value="Estate Agent">Estate Agent</Select.Option>
							</Select>
						</Form.Item>
					</Col>
				</div>
			);
		} else {
			return <div />;
		}
	};

	const AccmDetails = () => {
		if (accmDetails) {
			return (
				<div>
					<Col md="6">
						<Form.Item
							name={[ 'last_rent_amount' ]}
							label="How much was your last rent?"
							rules={[ { type: 'number', required: true } ]}
						>
							<InputNumber style={{ width: '100%' }} />
							{/* <CurrencyFormat
            placeholder="Input amount"
            value={formattedLr}
            thousandSeparator={true}
            prefix={"₦"}
            customInput={Input}
            onValueChange={values => {
              const { formattedValue, value } = values;
              setLr(value);
              setFormattedLr(formattedValue);
            }}
            style={{width: '100%'}}
          /> */}
						</Form.Item>
					</Col>
					<Col md="6">
						<Form.Item
							name={[ 'last_rent_paytype' ]}
							label="How did you pay?"
							rules={[ { required: true } ]}
						>
							<Select>
								<Select.Option value="Bank Transfer">Bank Transfer</Select.Option>
								<Select.Option value="Cash">Cash</Select.Option>
								<Select.Option value="Cheque">Cheque</Select.Option>
							</Select>
						</Form.Item>
					</Col>

					<Col md="6">
						<Form.Item
							name={[ 'rent_collector' ]}
							label="Who did you pay your last rent to?"
							rules={[ { required: true } ]}
						>
							<Select
								onChange={(e) => {
									if (e === 'Landlord') {
										setX('Landlord');
									} else if (e === 'Caretaker') {
										setX('Caretaker');
									} else if (e === 'Estate Agent') {
										setX('Agent');
									}
								}}
							>
								<Select.Option value="Landlord">Landlord</Select.Option>
								<Select.Option value="Caretaker">Caretaker</Select.Option>
								<Select.Option value="Estate Agent">Estate Agent</Select.Option>
							</Select>
						</Form.Item>
					</Col>
				</div>
			);
		} else {
			return <div />;
		}
	};

	const onFinish = (fielValues) => {
		console.log('Received values of form: ', fielValues);
		fielValues.dob = fielValues.dob.format();
		const values = {
			...fielValues
		};
		const data = JSON.stringify(values);
		localStorage.setItem('personal', data);
		next();
	};
	return (
		<Form
			form={form}
			className="mt-3 "
			{...layout}
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
			layout="vertical"
		>

			<Form.Item name={[ 'employment_type' ]} label="What's your employment type?" rules={[ { required: true } ]}>
				<Select size='large'  style={{width: '58%'}}  placeholder='Select your employment type'>
					<Select.Option value="Single">Salaried employment</Select.Option>
					<Select.Option value="Married">Business Ownerk</Select.Option>
				</Select>
			</Form.Item>

			
					<Form.Item name={[ 'company_name' ]} label="What’s the name of the company you work for?" rules={[ { required: true } ]}>
						<Input style={{ width: '58%' }} placeholder='Enter the company name' />
					</Form.Item>
				
					<Form.Item name={[ 'company_address' ]} label="Address of the company" rules={[ { required: true } ]}>
						<Input style={{ width: '58%' }} placeholder='Enter the company address' />
					</Form.Item>
					
					<Form.Item name={[ 'employer_phone' ]} label="HR or employer’s work phone number" rules={[ { required: true } ]}>
						<Input  style={{ width: '58%' }} placeholder='Enter phone number' />
					</Form.Item>
					
					<Form.Item name={[ 'employer_email' ]} label="HR or employer’s email address" rules={[ { required: true, type: 'email' } ]}>
						<Input  style={{ width: '58%' }} placeholder='Enter email address' />
					</Form.Item>
					<Form.Item name={[ 'work_email' ]} label="Your work email" rules={[ { required: true, type: 'email' } ]}>
						<Input  style={{ width: '58%' }} placeholder='Enter email address' />
					</Form.Item>
					<Form.Item name={[ 'employment_date' ]} label="Date of employment" rules={[ { required: true } ]}>
						<DatePicker format="DD/MM/YYYY" style={{ width: '58%' }}/>
						{/* <Datetime dateFormat="DD/MM/YYYY" timeFormat={false} /> */}
					</Form.Item>

					<Form.Item name={[ 'job_role' ]} label="Job role" rules={[ { required: true, type: 'email' } ]}>
						<Input  style={{ width: '58%' }} placeholder='Enter your job role' />
					</Form.Item>
			
			{/* <Row>
				<Col md="6">
					<Form.Item name={[ 'home_address' ]} label="Home Address" rules={[ { required: true } ]}>
						<Input />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item name={[ 'state' ]} label="State" rules={[ { required: true } ]}>
						<Input />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item name={[ 'city' ]} label="City" rules={[ { required: true } ]}>
						<Input />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item
						name={[ 'accomodation_status' ]}
						label="Accomodation Status"
						rules={[ { required: true } ]}
					>
						<Select
							onChange={(e) => {
								if (e === 'I live in a house') {
									setAccm(true);
								} else if (e === 'I just found a house') {
									setJustFound(true);
									setAccm(false);
								} else if (e === 'Still Searching') {
									setJustFound(false);
									setAccm(false);
								}
							}}
						>
							<Select.Option value="I live in a house">I live in a house</Select.Option>
							<Select.Option value="I just found a house">I just found a house</Select.Option>
							<Select.Option value="Still Searching">Still Searching</Select.Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<AccmDetails />
				<JustFound />
				<Xdetails />
			</Row> */}

			<BottomNav prev={prev}/>
		</Form>
	);
};
export default Form2;
