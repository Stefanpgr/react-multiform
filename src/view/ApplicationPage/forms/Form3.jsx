import React, { useEffect } from 'react';
import { Form, Input, Button, InputNumber, Select } from 'antd';
import { Col, Row } from 'react-bootstrap';
const layout = {
	labelCol: { span: 12 },
	wrapperCol: { span: 16 }
};

const Form3 = (props) => {
	console.log(props);
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
	}, []);

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
		const data = JSON.stringify(values);
		localStorage.setItem('referee', data);
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
			<Row>
				<Col md="6">
					<Form.Item name={[ 'referee_firstname' ]} label="Referee Fistname" rules={[ { required: true } ]}>
						<Input />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item name={[ 'referee_lastname' ]} label="Referee Lastname" rules={[ { required: true } ]}>
						<Input style={{ width: '100%' }} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Form.Item name={[ 'referee_address' ]} label="Referee Address" rules={[ { required: true } ]}>
						<Input style={{ width: '100%' }} />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item
						name={[ 'referee_phone' ]}
						label="Referee Phone"
						rules={[ { type: 'number', required: true } ]}
					>
						<InputNumber style={{ width: '100%' }} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Form.Item
						name={[ 'referee_email' ]}
						label="Referee Email"
						rules={[ { type: 'email', required: true } ]}
					>
						<Input style={{ width: '100%' }} />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item name={[ 'referee_relationship' ]} label="Relationship?" rules={[ { required: true } ]}>
						<Select>
							<Select.Option value="Colleague">Colleague</Select.Option>
							<Select.Option value="Cousin">Cousin</Select.Option>
							<Select.Option value="Friend">Friend</Select.Option>
							<Select.Option value="Sibling">Sibling</Select.Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>
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
