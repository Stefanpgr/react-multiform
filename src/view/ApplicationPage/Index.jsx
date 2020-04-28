import React,{useState} from 'react';
import AppSidebar from './AppSidebar';
import { Row, Col, Container } from 'react-bootstrap';
import {Heading }from './forms/Header'
import {Layout} from 'antd'
import Form1 from './forms/Form1';
import Form2 from './forms/Form2';
import Form3 from './forms/Form3';
import Form4 from './forms/Form4';
import Form5 from './forms/Form5';
import Form6 from './forms/Form6';


const {Content} = Layout
const Application = () => {
	const [ current, setCurrent ] = useState(0);

	const next = (set) => {
		const curr = current + 1;
		setCurrent(curr);
		if (set >= 0) {
			setCurrent(set);
		}
		console.log(current, 'next');
	};
	const goto = (set) => {
		
		setCurrent(set);
		
	};

	const prev = () => {
		const curr = current - 1;
		setCurrent(curr);
		console.log(current, 'prev');
	};
	const steps = [
		{
			title: 'Payment Option',
			content: <Form1 next={next} current={current} />,
			sub: 'Tell us a bit about what you do'
		},
		{
			title: 'Employment Details',
			content: <Form2 next={next} prev={prev} current={current} />,
			sub: 'Tell us a bit about what you do'
		},
		{
			title: 'Financial Information',
			content: <Form3 next={next} prev={prev} current={current} />,
			sub: 'Give us information about your finance'
		},
		{
			title: 'Rent Information',
			content: <Form4 next={next} prev={prev} current={current} />,
			sub: 'We will like to know about your rent'
		},
		{
			title: 'Landlord details',
			content: <Form5 next={next} prev={prev} current={current} />,
			sub: 'Give us details about your landord'
		},
		{
			title: 'Referee details',
			content: <Form6 next={next} prev={prev} current={current} />,
			sub: 'Give us information about your finance'
		}
	];
	const getProgress = () =>{
	const progress = 	Math.round((100/6)) *( current+1)
	if(progress > 100){
		return 100
	}
	return progress
	}
	return (
		<div className="container">
				{/* <Layout className="site-layout"> */}
					
					
						<Row>
				<Col md={4} >
					<AppSidebar goto={goto} current={current} progress={getProgress()} className=''/>
				</Col>
				<Col md={8}>
				{/* <Content style={{ margin: '0 14px ', height: '100%' }}> */}
				<Heading step={current + 1} progress={getProgress()} title={steps[current].title} sub={steps[current].sub} />
				<div className="steps-action">{steps[current].content}</div>
				{/* </Content> */}
				</Col>
			</Row>
				
					
					
				{/* </Layout> */}
			
		</div>
	);
};

export default Application;
