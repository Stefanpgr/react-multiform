import React from 'react'
import { Container} from 'react-bootstrap'


const Contract = ({next}) =>{
    return(
  
            <div className='text-left mt-3'>
       <span><div>{'<'}Back</div></span>     <h4 style={{color: '#00204F', fontWeight: 'bold', fontSize: '20px'}}>Offer letter and contract</h4>
           <div className='line' style={{width: '100%'}}></div>
         <Container>
         <div  style={{paddingLeft: 40, paddingRight: 40}} className=' mt-3 text-center'>
        <p style={{color: '#00204F', fontSize: '21px', textTransform: "uppercase", fontWeight: 'bold'}}>Offer letter and contract</p>  
        </div>
        <p style={{color: '#585858', paddingRight: '15px', paddingLeft: '15px', textAlign: 'justify', fontSize: '12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium. Massa ultricies mi quis hendrerit dolor magna eget. Nullam eget felis eget nunc lobortis. Faucibus ornare suspendisse sed nisi. Sagittis eu volutpat odio facilisis mauris sit amet massa. Erat velit scelerisque in dictum non consectetur a erat. Amet nulla facilisi morbi tempus iaculis urna. Egestas purus viverra accumsan in nisl. Feugiat in ante metus dictum at tempor commodo. Convallis tellus id interdum velit laoreet. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Dui faucibus in ornare quam. In iaculis nunc sed augue lacus viverra vitae congue. Vitae tempus quam pellentesque nec nam aliquam sem et. Ut morbi tincidunt augue interdum. Sem fringilla ut morbi tincidunt augue. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. In est ante in nibh mauris. Nam aliquam sem et tortor consequat id porta nibh. Diam quis enim lobortis scelerisque fermentum dui faucibus. Non curabitur gravida arcu ac. Magna fringilla urna porttitor rhoncus dolor. Aenean et tortor at risus viverra adipiscing. Dignissim sodales ut eu sem. Quam quisque id diam vel quam elementum pulvinar etiam non. Eleifend quam adipiscing vitae proin sagittis. Enim facilisis gravida neque convallis a cras semper. Risus commodo viverra maecenas accumsan. Sit amet porttitor eget dolor morbi non arcu risus. Vitae et leo duis ut diam quam. Aliquam faucibus purus in massa tempor. Quisque egestas diam in arcu cursus. Nibh sit amet commodo nulla facilisi nullam. Lacus luctus accumsan tortor posuere ac. Risus quis varius quam quisque id diam vel quam elementum. Scelerisque purus semper eget duis at. Pretium lectus quam id leo in vitae turpis massa sed. Lobortis elementum nibh tellus molestie nunc non blandit massa. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Posuere morbi leo urna molestie at elementum eu. Viverra adipiscing at in tellus integer. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Quis blandit turpis cursus in hac habitasse. Sagittis id consectetur purus ut faucibus pulvinar. Ultrices eros in cursus turpis massa. Sit amet nulla facilisi morbi tempus. Mauris rhoncus aenean vel elit. Nulla facilisi cras fermentum odio eu feugiat. Feugiat scelerisque varius morbi enim nunc faucibus a. Neque volutpat ac tincidunt vitae semper. Amet nisl suscipit adipiscing bibendum est ultricies integer. Urna nunc id cursus metus aliquam eleifend. Ullamcorper malesuada proin libero nunc consequat interdum varius. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Tincidunt dui ut ornare lectus sit. Quis risus sed vulputate odio ut enim. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Volutpat odio facilisis mauris sit amet. Pellentesque sit amet porttitor eget dolor morbi non arcu. Pulvinar mattis nunc sed blandit libero volutpat. Amet nisl suscipit adipiscing bibendum est ultricies integer. Posuere urna nec tincidunt praesent semper feugiat nibh sed. In dictum non consectetur a erat. Porta nibh venenatis cras sed felis eget. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Pulvinar sapien et ligula ullamcorper. Pharetra convallis posuere morbi leo. Lacus laoreet non curabitur gravida arcu ac. Neque ornare aenean euismod elementum nisi quis eleifend. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Faucibus purus in massa tempor nec feugiat nisl. Viverra aliquet eget sit amet tellus cras adipiscing enim. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Mi bibendum</p>

         </Container>
      
        
            <div className='line' style={{width: '100%'}}></div>
            <div className='text-center d-flex mt-4 mb-3 mt-2' style={{justifyContent: 'center'}}>
                 <button type='button' className='btn-norm mr-3'>Reject</button>
             
              <button onClick={()=> next()} type='button' className='btn-pry'>Accept</button>
            </div>
            <div style={{ justifyContent: 'center', display: 'flex'}}>

               <p style={{textAlign: 'center', fontSize: '10px', width: '300px',}} className='mb-3'>clicking accept, I hereby Agree and consent to the offer letter’s terms and rent agreement. Agree that Kwaba reserves the right to evict me from the financed property under 7 days in the event of one payment default. Accept Kwaba and its financial partners terms of use and privacy policy.</p>
            </div>
            </div>

    )
}


export default Contract;