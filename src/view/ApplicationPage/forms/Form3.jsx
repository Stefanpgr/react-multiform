import React, {  useEffect } from 'react';
import { Form, Input,  Select, DatePicker } from 'antd';
// import CurrencyFormat from 'react-currency-format'
import {BottomNav} from '../BottomNav'
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
			
			{...layout}
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
			layout="vertical"
		>
		
			<Form.Item
				name={[ 'salary_accnum' ]}
				label="Salary bank account number"
				rules={[ { required: true } ]}
				
			>
				<Input style={{ width: '58%' }} placeholder='Enter bank account number'/>
			</Form.Item>

			<Form.Item name={[ 'bank_name' ]} label="Bank name" rules={[ { required: true } ]}>
				<Select size='large' style={{ width: '58%' }} placeholder='Select your bank'>
					<Select.Option value="Single">Access bank</Select.Option>
					<Select.Option value="Married">Zenith bank</Select.Option>
				</Select>
			</Form.Item>

			<Row>
				<Col>
					<Form.Item name={[ 'bvn' ]} label="BVN" rules={[ { required: true } ]}>
						<Input style={{ width: '58%' }} placeholder='Enter your bvn'/>
					</Form.Item>
					
				</Col>
				<Col><Form.Item name={[ 'dob' ]} label="Date of Birth" rules={[ { required: true } ]}>
						<DatePicker format="DD/MM/YYYY" />
						
					</Form.Item></Col>
				
			</Row>

			<Form.Item name={[ 'pay_date' ]} label="What day do you get paid?" rules={[ { required: true } ]}>
				<Select size='large' style={{ width: '58%' }} placeholder='What day do you get paid?'>
					{payDates.map((e, i) => (
						<Select.Option key={i} value={e}>
							{e}
						</Select.Option>
					))}
				</Select>
			</Form.Item>
		<BottomNav prev={prev}/>
		</Form>
	);
};
export default Form3;
