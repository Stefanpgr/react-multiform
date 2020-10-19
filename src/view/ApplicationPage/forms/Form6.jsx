import React, { useState, useEffect } from 'react';
import { Form, Input, Space, Select } from 'antd';
import { Redirect } from 'react-router-dom';
// import CurrencyFormat from 'react-currency-format'
import { connect, useDispatch } from 'react-redux';
import { BottomNav } from '../BottomNav';
import { sendApplication } from '../../../actions/application';
// import { Col, Row } from 'react-bootstrap';

const layout = {
	labelCol: { span: 16 },
	wrapperCol: { span: 16 }
};
const Form6 = ({ prev, application, user, sendApplication, history }) => {
	const [ form ] = Form.useForm();
	const dispatch = useDispatch();
	const { referee_details } = application;

	const validateMessages = {
		required: 'This field is required!',
		types: {
			email: 'Not a valid email!',
			number: 'Not a valid number!'
		},
		number: {
			range: 'Must be between ${min} and ${max}'
		}
	};

	useEffect(
		() => {
			window.scrollTo(0, 0);
			if (referee_details) {
				form.setFieldsValue({
					full_name: referee_details.full_name,
					address: referee_details.address,
					phone: referee_details.phone,
					email: referee_details.email,
					relationship: referee_details.relationship
				});
			}
		},
		[ form ]
	);

	const onFinish = async (fielValues) => {
		console.log(history, 'HISTORY');

		const values = {
			referee_details: { ...fielValues }
		};
		dispatch({
			type: 'ADD_APPL',
			data: values,
			page: 5
		});
		const decide = await sendApplication(values, 'referee-details', history);
		if (decide.isComplete) {
			history.push('/application-success');
			// return <Redirect to="/login" />;
		}
		console.log({ ...application, ...values }, 'APPLICATION');
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
				{/* <Input placeholder="Enter relationship" /> */}
				<Select size="large" style={{ width: "58%" }} placeholder="Enter relationship">
      <Select.Option value='father'>
           Father
            </Select.Option>
			 <Select.Option value='mother'>
          Mother
            </Select.Option>
            <Select.Option value='cousin'>
          Cousin
            </Select.Option>
			 <Select.Option value='brother'>
          Brother
            </Select.Option>
			 <Select.Option value='sister'>
          Sister
            </Select.Option>
         
        </Select>
			</Form.Item>
			<BottomNav prev={prev} />
		</Form>
	);
};

const mapStateToProps = (state) => ({
	application: state.application,
	user: state.user
});

export default connect(mapStateToProps, { sendApplication })(Form6);
