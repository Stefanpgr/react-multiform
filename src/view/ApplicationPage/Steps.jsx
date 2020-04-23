import React, { useState } from 'react';
// import { Steps } from 'antd';
import Form1 from './forms/Form1';
import Form2 from './forms/Form2';
import Form3 from './forms/Form3';
import Form4 from './forms/Form4';
// import Form2 from './Form2';
// import Form3 from './Form3';
// import Form4 from './Form4';
// const { Step } = Steps;

const StepForm = () => {
	const [ current, setCurrent ] = useState(0);

	const next = (set) => {
		const curr = current + 1;
		setCurrent(curr);
		if (set >= 0) {
			setCurrent(set);
		}
		console.log(current, 'next');
	};

	const prev = () => {
		const curr = current - 1;
		setCurrent(curr);
		console.log(current, 'prev');
	};
	const steps = [
		{
			title: 'First',
			content: <Form1 next={next} current={current} />
		},
		{
			title: 'Personal Details',
			content: <Form2 next={next} prev={prev} current={current} />
		},
		{
			title: 'Referee Details',
			content: <Form3 next={next} prev={prev} current={current} />
		},
		{
			title: 'Employment Details',
			content: <Form4 next={next} prev={prev} current={current} />
		}
	];

	return (
		<div>
			{/* <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps> */}
			<div className="steps-action">{steps[current].content}</div>
			<div className="">
				{/* {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: 8 }} onClick={() => prev()}>
            Previous
          </Button>
        )} */}
			</div>
		</div>
	);
};

export default StepForm;
