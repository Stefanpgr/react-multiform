import React, { useEffect } from 'react';
import { Form, Input, Select, DatePicker, Space, AutoComplete } from 'antd';
import { useDispatch, connect, useSelector } from 'react-redux';
// import CurrencyFormat from 'react-currency-format'
import moment from 'moment';
import { BottomNav } from '../BottomNav';
import { Col, Row } from 'react-bootstrap';

const layout = {
	labelCol: { span: 18 },
	wrapperCol: { span: 16 }
};
const Form3 = ({ next, prev, finance_info, banks }) => {
	const dateFormat = 'DD/MM/YYYY';
	const [ form ] = Form.useForm();
	const dispatch = useDispatch();

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

	useEffect(
		() => {
			window.scrollTo(0, 0);
			console.log(banks);
			if (finance_info) {
				form.setFieldsValue({
					salary_accnum: finance_info.salary_accnum,
					bank_name: finance_info.bank_name,
					bvn: finance_info.bvn,
					pay_date: finance_info.pay_date,
					dob: moment(finance_info.dob)
				});
			}
		},
		[ form ]
	);

	const onFinish = (fielValues) => {
		console.log('Received values of form: ', fielValues);
		const values = {
			finance_info: { ...fielValues },
			page: 2
		};
		dispatch({
			type: 'ADD_APPL',
			data: values
		});
		// const data = JSON.stringify(values);
		// localStorage.setItem('finance', data);
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
			<Form.Item name={[ 'salary_accnum' ]} label="Salary bank account number" rules={[ { required: true } ]}>
				<Input style={{ width: '58%' }} placeholder="Enter bank account number" />
			</Form.Item>

			<Form.Item name={[ 'bank_name' ]} label="Bank name" rules={[ { required: true } ]}>
				<Select size="large" style={{ width: '58%' }} placeholder="Select your bank">
					{banks.map((e, i) => (
						<Select.Option key={i} value={e.name}>
							{e.name}
						</Select.Option>
					))}
				</Select>
				{/* <AutoComplete
      style={{ width: '58%' }}
      options={options}
      placeholder="try to type `b`"
      filterOption={(inputValue, option) =>
        option.name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    /> */}
			</Form.Item>

			{/* <Row>
				<Col> */}
			<Space size="small">
				{' '}
				<Form.Item name={[ 'bvn' ]} label="BVN" rules={[ { required: true } ]}>
					<Input style={{ width: '150%' }} placeholder="Enter your bvn" />
				</Form.Item>
				<Form.Item name={[ 'dob' ]} label="Date of Birth" rules={[ { required: true } ]}>
					<DatePicker format={dateFormat} style={{ width: '140%' }} />
				</Form.Item>
			</Space>

			{/* </Col>
			</Row> */}

			<Form.Item name={[ 'pay_date' ]} label="What day do you get paid?" rules={[ { required: true } ]}>
				<Select size="large" style={{ width: '58%' }} placeholder="What day do you get paid?">
					{payDates.map((e, i) => (
						<Select.Option key={i} value={e}>
							{e}
						</Select.Option>
					))}
				</Select>
			</Form.Item>
			<BottomNav prev={prev} />
		</Form>
	);
};

const mapStateToProps = (state) => ({
	finance_info: state.application.finance_info,
	banks: state.paystack.banks
});

export default connect(mapStateToProps)(Form3);
