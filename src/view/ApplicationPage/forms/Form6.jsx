import React, { useState, useEffect } from 'react';
import { Form, Input, Space } from 'antd';
// import CurrencyFormat from 'react-currency-format'
import {BottomNav} from '../BottomNav'
// import { Col, Row } from 'react-bootstrap';

const layout = {
	labelCol: { span: 16 },
	wrapperCol: { span: 16 }
};
const Form6 = (props) => {
	const [ form ] = Form.useForm();
	const { next, prev } = props;
	
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
		const data = JSON.parse(localStorage.getItem('referee'));
		if (data) {
			form.setFieldsValue({
				referee_firstname: data.referee_firstname,
				referee_lastname: data.referee_lastname,
				referee_address: data.referee_address,
				referee_phone: data.referee_phone,
				referee_email: data.referee_email,
				referee_relationship: data.referee_relationship
			});
		}
	}, [form]);

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
			
			{...layout}
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
			layout="vertical"
		>
		
			<Form.Item
				name={[ 'full_name' ]}
				label="Full name"
				rules={[ {  required: true } ]}
				
			>
				<Input style={{ width: '58%' }} placeholder='Enter full name'/>
			</Form.Item>

			
            <Form.Item
				name={[ 'address' ]}
				label="Address"
				rules={[ {  required: true } ]}
				
			>
				<Input style={{ width: '58%' }} placeholder='Enter address'/>
			</Form.Item>


	<Space size='small'>				<Form.Item name={[ 'phone' ]} label="Phone number" rules={[ { required: true } ]}>
						<Input style={{ width: '120%' }} placeholder='Enter phone number'/>
					</Form.Item>
					
				<Form.Item name={[ 'email' ]} label="Email address" rules={[ { required: true, type: 'email' } ]}>
						<Input placeholder='Enter email address' style={{ width: '120%' }}/>
						
					</Form.Item>
					</Space>	
			

			<Form.Item name={[ 'relationship' ]} label="Relationship" rules={[ { required: true } ]}>
						<Input placeholder='Enter relationship'  />
						
					</Form.Item>
		<BottomNav prev={prev}/>
		</Form>
	);
};
export default Form6;
