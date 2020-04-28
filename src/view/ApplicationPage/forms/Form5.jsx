import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';
// import CurrencyFormat from 'react-currency-format'
import {BottomNav} from '../BottomNav'


const layout = {
	labelCol: { span: 12 },
	wrapperCol: { span: 16 }
};
const Form5 = (props) => {
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
				name={[ 'landlord_full_name' ]}
				label="Landlord's full name"
				rules={[ {  required: true } ]}
				
			>
				<Input style={{ width: '58%' }} placeholder='Enter full name'/>
			</Form.Item>

			
            <Form.Item
				name={[ 'landlord_acct_num' ]}
				label="Bank account number"
				rules={[ {  required: true } ]}
				
			>
				<Input style={{ width: '58%' }} placeholder='Enter account number'/>
			</Form.Item>


			
            <Form.Item
				name={[ 'landlord_acct_num' ]}
				label="Bank account number"
				rules={[ {  required: true } ]}
				
			>

                <Select  style={{ width: '58%' }} placeholder='Bank Name' ><Select.Option  value='Access'>
							Access
						</Select.Option></Select>
			</Form.Item>

		

			<Form.Item name={[ 'landlord_phone_num' ]} label="Landlord's phone number" rules={[ { required: true } ]}>
						<Input placeholder='Enter landlord’s phone number' />
						
					</Form.Item>
		<BottomNav prev={prev}/>
		</Form>
	);
};
export default Form5;
