import React, { useState } from 'react'
import '../Auth.scss';
import TopNav from '../../TopNav'
import SignupForm from './SignupForm';
import SignupSuccess from '../../Dashboard/pages/SignupSuccess';


const Signup = () =>{

    const [finish, setFinish] = useState(false);

    const onFinish = values => {

        setFinish(true);

        console.log('Received values of form: ', values);
    };

    return(
        <div className="auth">

            <TopNav />

            {
                finish === true ?

                <SignupSuccess/>

                :

                <SignupForm finish={onFinish}/>

            }
        </div>
    )
}


export default Signup