import React, { useState } from 'react';
import AppSidebar from './AppSidebar';
import { Row, Col, Container } from 'react-bootstrap';
import { Heading } from './forms/Header';
import { useDispatch } from 'react-redux';
import { Layout } from 'antd';
import Form1 from './forms/Form1';
import Form2 from './forms/Form2';
import Form3 from './forms/Form3';
import Form4 from './forms/Form4';
import Form5 from './forms/Form5';
import Form6 from './forms/Form6';

const { Content,Footer, Sider, Header } = Layout;
const Application = () => {
	const [ current, setCurrent ] = useState(0);
	// const [progress, setProgress]
	const dispatch =  useDispatch()
	const next = (set) => {
		const curr = current + 1;
		setCurrent(curr);
		if (set >= 0) {
			setCurrent(set);
		}
		dispatch({
			type: 'PAGE_CHANGE',
			data: set || curr
		})
		console.log(current, 'next');
	};
	const goto = (set) => {
		setCurrent(set);
		dispatch({
			type: 'PAGE_CHANGE',
			data: set
		})
	};

	const prev = () => {
		const curr = current - 1;
		setCurrent(curr);
		console.log(current, 'prev');
		dispatch({
			type: 'PAGE_CHANGE',
			data: curr
		})
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
	const getProgress = () => {
		const progress = Math.round(100 / 6) * (current + 1);
		if (progress > 100) {
			return 100;
		}
		return progress;
	};
	return (
		<div className="">
			  <Layout>
			{/* <Layout className="site-layout"> */}
			<Header>dd</Header>
			<Layout>
      <Sider style={{padding: 14, marginLeft: '50px'}} width={300} className="sider-nav hide">
		  
	
					<AppSidebar goto={goto} current={current} progress={getProgress()} />
					</Sider>
			
				<Container
          className="site-layout-background mt-3 form-wraper"
          style={{
			
			// marginLeft: '80px',
            margin: 0,
            minHeight: 280,
          }}
        >
			<div className='form-wraper-content'>
					<Heading
						step={current + 1}
						progress={getProgress()}
						title={steps[current].title}
						sub={steps[current].sub}
					/>
					<div  className="steps-action">{steps[current].content}</div>
					</div>
					</Container>
				{/* </Col>
			</Row> */}
			</Layout>
			<Footer>Footer</Footer>
{/* </Layout> */}
			</Layout>
		</div>
	);
};

export default Application;
