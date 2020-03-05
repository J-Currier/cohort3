import React, { useState } from 'react'; 
import LinkedList from './linklist.js';

const LinkedListComp = () => {
    const [subject, setSubject] = useState('');
    const [amount, setAmount] = useState('');


    return(
        <div className="linkedListComp">
            <div className='myHeading'>
              Linked List
            </div>
            <div className='addNewAccountCard'>
              <div className='addAccountSection'>
                Item:               
                <input type="text" name='subject' value={subject} onChange={(event) => setSubject(event.target.value)}  />
                Amount:                
                <input type="number" name='amount' value={amount} onChange={(event)=> setAmount(event.target.value)}  />
                <br/>
                <button className='buttons' id='addNewNodeButton' >Add my item</button>
              </div>
            </div>
            <div className='myAccountCards'>
              My list will go here
            </div>
            
        </div>    
    )

}
export default LinkedListComp;

