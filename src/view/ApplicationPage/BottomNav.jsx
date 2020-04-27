import React, {useState, useEffect} from'react'
import {Divider, Button} from 'antd'

export const BottomNav = ({ prev, current}) => {
    const [curr, setCurr] = useState(false)
    console.log(current, 'curre')
const getCurrent = () =>{
    if(current === 0) setCurr(true)

    return 0;
}

useEffect(()=>{
    getCurrent()
})

    return(
        <div>
        <Divider />
        <div className="steps-action">
                    <Button style={{width: '15%'}} className="btn-form" size='large' onClick={() => prev()} disabled={curr}>
                            Back
                        </Button>
                        <Button size='large' style={{   marginLeft: '300px', width: '20%' }} htmlType="submit" type="primary" className="btn-form">
                            Save & Continue
                        </Button>
        
                        
                    </div>
        
            </div>
    )
  
}