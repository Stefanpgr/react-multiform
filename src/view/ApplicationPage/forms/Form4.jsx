import React, { useEffect } from 'react';
import { Form, Input, Button, InputNumber, Select, DatePicker } from 'antd';
import { Col, Row } from 'react-bootstrap';
const layout = {
	labelCol: { span: 12 },
	wrapperCol: { span: 16 }
};

const Form4 = (props) => {
	console.log(props);

	const [ form ] = Form.useForm();
	const { prev } = props;
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
		const data = JSON.parse(localStorage.getItem('employer'));
		if (data) {
			form.setFieldsValue({
				employer_name: data.employer_name,
				employer_address: data.employer_address,
				employer_phone: data.employer_phone,
				employer_email: data.employer_email,
				// employment_date: data.employment_date,
				job_role: data.job_role,
				salary_bank_name: data.salary_bank_name,
				salary_acctnum: data.salary_acctnum,
				salary_acct_type: data.salary_acct_type
			});
		}
	}, []);

	const onFinish = (values) => {
		values.employment_date = values.employment_date.format();
		console.log('Received values of form: ', values);

		const data = JSON.stringify(values);
		localStorage.setItem('employer', data);
		alert('Done!');
		// message.success("Processing complete!")
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
					<Form.Item
						name={[ 'employer_name' ]}
						label="Employer or Business name"
						rules={[ { required: true } ]}
					>
						<Input />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item
						name={[ 'employer_address' ]}
						label="Employer or Business address"
						rules={[ { required: true } ]}
					>
						<Input style={{ width: '100%' }} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Form.Item
						name={[ 'employer_phone' ]}
						label="Employer or Business phone"
						rules={[ { type: 'number', required: true } ]}
					>
						<InputNumber style={{ width: '100%' }} />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item
						name={[ 'employer_email' ]}
						label="Employer or Business email"
						rules={[ { type: 'email', required: true } ]}
					>
						<Input style={{ width: '100%' }} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Form.Item name={[ 'employment_date' ]} label="Date of Employment" rules={[ { required: true } ]}>
						<DatePicker format="DD/MM/YYYY" />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item name={[ 'job_role' ]} label="Job Role" rules={[ { required: true } ]}>
						<Input style={{ width: '100%' }} />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item name={[ 'salary_bank_name' ]} label="Salary Bank Name" rules={[ { required: true } ]}>
						<Select>
							<Select.Option value="Access">Access Bank</Select.Option>
						</Select>
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item
						name={[ 'salary_acctnum' ]}
						label="Salary Account Number"
						rules={[ { type: 'number', required: true } ]}
					>
						<InputNumber style={{ width: '100%' }} />
					</Form.Item>
				</Col>
				<Col md="6">
					<Form.Item name={[ 'salary_acct_type' ]} label="Salary Account Type" rules={[ { required: true } ]}>
						<Select>
							<Select.Option value="Current">Current Account</Select.Option>
							<Select.Option value="Savings">Savings Account</Select.Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>
			<div className="steps-action">
				<Button htmlType="submit" type="primary" className="btn-form">
					Done
				</Button>

				<Button style={{ margin: 8 }} onClick={() => prev()} className="btn-form">
					Previous
				</Button>
			</div>
		</Form>
	);
};
export default Form4;
