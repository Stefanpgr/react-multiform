import React, { useState, useEffect } from 'react';
import { Form, Input, Button, InputNumber, Select, DatePicker } from 'antd';
// import CurrencyFormat from 'react-currency-format'

import { Col, Row } from 'react-bootstrap';

const layout = {
	labelCol: { span: 12 },
	wrapperCol: { span: 16 }
};
const Form3 = (props) => {
	const [ form ] = Form.useForm();
	const { next, prev } = props;
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
			className="mt-3 "
			{...layout}
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
			layout="vertical"
		>
		
			<Form.Item
				name={[ 'salary_accnum' ]}
				label="Salary bank account number"
				rules={[ { type: 'number', required: true } ]}
			>
				<InputNumber style={{ width: '100%' }} />
			</Form.Item>

			<Form.Item name={[ 'bank_name' ]} label="Bank name" rules={[ { required: true } ]}>
				<Select>
					<Select.Option value="Single">Access bank</Select.Option>
					<Select.Option value="Married">Zenith bank</Select.Option>
				</Select>
			</Form.Item>

			<Row>
				<Col md="6">
					<Form.Item name={[ 'bvn' ]} label="BVN" rules={[ { required: true } ]}>
						<InputNumber style={{ width: '100%' }} />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item name={[ 'dob' ]} label="Date of Birth" rules={[ { required: true } ]}>
						<DatePicker format="DD/MM/YYYY" />
						{/* <Datetime dateFormat="DD/MM/YYYY" timeFormat={false} /> */}
					</Form.Item>
				</Col>
			</Row>

			<Form.Item name={[ 'pay_date' ]} label="What day do you get paid?" rules={[ { required: true } ]}>
				<Select>
					{payDates.map((e, i) => (
						<Select.Option key={i} value={e}>
							{e}
						</Select.Option>
					))}
				</Select>
			</Form.Item>
			<div className="steps-action">
				<Button htmlType="submit" type="primary" className="btn-form">
					Next
				</Button>

				<Button style={{ margin: 8 }} onClick={() => prev()} className="btn-form">
					Previous
				</Button>
			</div>
		</Form>
	);
};
export default Form3;
