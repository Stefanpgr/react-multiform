import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Select, Radio } from 'antd';
import { Col, Row, Container } from 'react-bootstrap';


import styled from 'styled-components';
const StyledSwitch = styled.button`
		width: 80px;
		height: 79px;
		background: #e7f7ff 0% 0% no-repeat padding-box;
		border: 1px solid #5b55ff;
		border-radius: 5px;
		opacity: 1;
	`;

	const Box = styled.div`
top: 920px;
left: 650px;
width: 546px;
height: 320px;
background: #EDF3F8 0% 0% no-repeat padding-box;
border: 1px solid #51A4FB;
border-radius: 15px;
opacity: 1;
`
const StyledRadio = styled.button`
background: ${(props) => (props.switch === props.stat ? '#e7f7ff' : 0)};

border: ${(props) => (props.switch === props.stat ? '1px solid #5b55ff' : 0)};

border-radius: 5px;
font-family: Rubik, 'sans-serif';
color: #878787;
opacity: 1;
padding: 9px 0px 8px 15px;
`;
const layout = {
	labelCol: { span: 12 },
	wrapperCol: { span: 16 }
};

const Form4 = (props) => {
	// console.log(props);
	const [ accStat, setAcc ] = useState(1);
	const [ form ] = Form.useForm();
	const { prev, next } = props;
	const validateMessages = {
		required: 'This field is required!',
		types: {
			email: 'Not a validate email!',
			number: 'Not a validate number!'
		},
		// number: {
		// 	range: `Must be between ${min} and ${max}`
		// }
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
	}, [form]);

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
			className="mt-2 "
			{...layout}
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
			layout="vertical"
		>
		
					<Form.Item
						name={[ 'employer_name' ]}
						label="What's your current home address?"
						rules={[ { required: true } ]}
					>
						<Input />
					</Form.Item>
					<Form.Item label="How long have you lived here?" name="layout">
          <Radio.Group  buttonStyle="solid">
            <Radio.Button value={1}><p><strong>1</strong></p><p>Year</p></Radio.Button>
            <Radio.Button value={2}><p>2</p><p>Years</p> </Radio.Button>
            <Radio.Button value={3}><p>3</p><p>Years</p>  </Radio.Button>
			<Radio.Button value={4}><p>4</p><p>Years</p> </Radio.Button>
            <Radio.Button value={5}><p>5</p><p>Years</p>  </Radio.Button>
          </Radio.Group>
        </Form.Item>

		<Form.Item name={[ 'acc_status' ]} label="What's your accomodation status?" rules={[ { required: true } ]} >
				<Select size='large' value='Looking to renew my rent' style={{width: '65%'}} disabled>
					
						<Select.Option  value='Looking to renew my rent'>
						Looking to renew my rent
						</Select.Option>
					
				</Select> <a><span className='ml-3'><small onClick={()=> next(0)}>Change?</small></span></a>
			</Form.Item>

<Box>	
	<Container className='mt-3 ml-3'>	<Form.Item
						name={[ 'last_rent_amount' ]}
						label="How much was your last rent?"
						rules={[ { required: true } ]}
					>
						<Input addonBefore='₦' />
					</Form.Item>
					
					<Form.Item
						name={[ 'rent_colector' ]}
						label="Who did you pay to??"
						rules={[ { required: true } ]}
					>
							<Radio.Group
					onChange={(e) => {
						setAcc(e.target.value);
					}}
			
					initialValues={1}
				>
					
					<StyledRadio className="" switch={1} stat={accStat}>
						<Radio className="fg" value={1}>
							Landlord
						</Radio>
					</StyledRadio>

					<StyledRadio className="mr-3" switch={2} stat={accStat}>
						<Radio value={2}>Caretaker</Radio>
					</StyledRadio>

					<StyledRadio switch={3} stat={accStat}>
						<Radio value={3}>Agent</Radio>
					</StyledRadio>
				</Radio.Group>

					</Form.Item>

					<Form.Item name={[ 'pay_type' ]} label="How did you pay?" rules={[ { required: true } ]} >
				<Select size='large'  style={{width: '96%'}} placeholder='Select how you paid'>
					
						<Select.Option  value='card'>
						Card
						</Select.Option>
						<Select.Option  value='bank'>
						Bank Transfer
						</Select.Option>
					
				</Select> 
			</Form.Item>
					</Container>
	
</Box>

				{/* <StyledSwitch className="mr-4">
					<Col>
						<strong className="switch-text">1</strong>
					</Col>
					<Col>
						<p className="switch-text">Year</p>
					</Col>{' '}
				</StyledSwitch>
				<StyledSwitch className="mr-4">
					<Col>
						<strong className="switch-text">3</strong>
					</Col>
					<Col>
						<p className="switch-text">Months</p>
					</Col>{' '}
				</StyledSwitch>
				<StyledSwitch>
					<Col>
						<strong className="switch-text">6</strong>
					</Col>
					<Col>
						<p className="switch-text">Months</p>
					</Col>{' '}
				</StyledSwitch> */}
					{/* <Form.Item
						name={[ 'employer_address' ]}
						label="Employer or Business address"
						rules={[ { required: true } ]}
					>
						<Input  />
					</Form.Item> */}
				
		
		</Form>
	);
};
export default Form4;
