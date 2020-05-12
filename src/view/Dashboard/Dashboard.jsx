import React, { useState } from 'react';

import {  Container } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { Layout } from 'antd';
import ProcessAppl from './pages/ProcessAppl';
import Contract from './pages/Contract'
import Congrats from './pages/Congrats';
import Offer from './pages/Offer'
import AppBar from './AppProgressBar'
import CongratsPay from './pages/CongratsPay';
import SetupPay from './pages/SetupPay';
import RemitaDoc from './pages/Remita';

const { Footer, Header } = Layout;
const Dashboard = () => {
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
			type: 'DASHPAGE_CHANGE',
			data: set || curr
		})
		console.log(current, 'next');
	};
	const goto = (set) => {
		setCurrent(set);
		dispatch({
			type: 'DASHPAGE_CHANGE',
			data: set
		})
	};

	const prev = () => {
		const curr = current - 1;
		setCurrent(curr);
		console.log(current, 'prev');
		dispatch({
			type: 'DASHPAGE_CHANGE',
			data: curr
		})
	};
	const steps = [
		{
			title: 'Processing Application',
			content: <ProcessAppl next={next} current={current} />,
		
		},
		{
			title: 'Employment Details',
			content: <Congrats next={next} prev={prev} current={current} />,
			
		},
		{
			title: 'Financial Information',
			content: <Offer next={next} prev={prev} current={current} />,
			sub: 'Give us information about your finance'
		},
		{
			title: 'Financial Information',
			content: <Contract next={next} prev={prev} current={current} />,
			sub: 'Give us information about your finance'
		},
		{
			title: 'Financial Information',
			content: <CongratsPay next={next} prev={prev} current={current} />,
			sub: 'Give us information about your finance'
		},
		{
			title: 'Financial Information',
			content: <SetupPay next={next} prev={prev} current={current} />,
			sub: 'Give us information about your finance'
		},
		{
			title: 'Financial Information',
			content: <RemitaDoc next={next} prev={prev} current={current} />,
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
		<div style={{backgroundColor: '#F5F5F5'}}>
					<Header style={{ padding: 0 }} />
				

				<Container className='mt-5 mb-3' style={{ backgroundColor: '#ffff', width: '580px', margin: 'auto', }}>
				<AppBar className='mb-5'/>
				</Container>
					<div style={{ minHeight: '410px', backgroundColor: '#ffff', margin: 'auto', width: '580px' }}>
    				<Container>

					<div  className="steps-action">{steps[current].content}</div>
				</Container>
				</div>
					<Footer style={{ textAlign: 'center' }}>Copyright ©{new Date().getFullYear()} Kwaba</Footer>
		</div>
	
	);
};

export default Dashboard;
