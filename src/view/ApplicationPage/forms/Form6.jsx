import React, { useState, useEffect } from 'react';
import { Form, Input, Space } from 'antd';
// import CurrencyFormat from 'react-currency-format'
import { connect, useDispatch } from 'react-redux';
import { BottomNav } from '../BottomNav';
// import { Col, Row } from 'react-bootstrap';

const layout = {
	labelCol: { span: 16 },
	wrapperCol: { span: 16 }
};
const Form6 = ({ prev, application }) => {
	const [ form ] = Form.useForm();
	const dispatch = useDispatch();
	const { referee } = application;

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

	useEffect(
		() => {
			if (referee) {
				form.setFieldsValue({
					full_name: referee.full_name,
					address: referee.address,
					phone: referee.phone,
					email: referee.email,
					relationship: referee.relationship
				});
			}
		},
		[ form ]
	);

	const onFinish = (fielValues) => {
		console.log('Received values of form: ', fielValues);

		const values = {
			referee: { ...fielValues }
		};
		dispatch({
			type: 'ADD_APPL',
			data: values,
			page: 5
		});
		console.log(application);
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
			<Form.Item name={[ 'full_name' ]} label="Full name" rules={[ { required: true } ]}>
				<Input style={{ width: '58%' }} placeholder="Enter full name" />
			</Form.Item>

			<Form.Item name={[ 'address' ]} label="Address" rules={[ { required: true } ]}>
				<Input style={{ width: '58%' }} placeholder="Enter address" />
			</Form.Item>

			<Space size="small">
				{' '}
				<Form.Item name={[ 'phone' ]} label="Phone number" rules={[ { required: true } ]}>
					<Input style={{ width: '120%' }} placeholder="Enter phone number" />
				</Form.Item>
				<Form.Item name={[ 'email' ]} label="Email address" rules={[ { required: true, type: 'email' } ]}>
					<Input placeholder="Enter email address" style={{ width: '120%' }} />
				</Form.Item>
			</Space>

			<Form.Item name={[ 'relationship' ]} label="Relationship" rules={[ { required: true } ]}>
				<Input placeholder="Enter relationship" />
			</Form.Item>
			<BottomNav prev={prev} />
		</Form>
	);
};

const mapStateToProps = (state) => ({
	application: state.application
});

export default connect(mapStateToProps)(Form6);
