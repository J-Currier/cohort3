import React, { useState } from 'react'; 
import { AppContext } from '../contextMaker';

const LinkedListComp = () => {
    const context = React.useContext(AppContext);

    const [subject, setSubject] = useState('');
    const [amount, setAmount] = useState('');
    console.log(context)

    const addButtonFunction =(event) => {
      if (subject === "" || amount === "") {
        alert("Please enter a subject and/or amount!");
        event.preventDefault();
      } else {
        context.linkedList.insert(subject, amount);
        // context.handleStateChange([{ state: "current", newState: context.linkedList.insert(subject, amount) }])
      
      setSubject('');
      setAmount('');
      console.log(context.linkedList)
      event.preventDefault();
      }
    };
    

    const displayItems = (linkedList) => {
      if (!linkedList.head) {
        console.log('head is null')
          return null;
      } else {
        let currentNode = linkedList.head;
        let myNodeList = [];
        let counter = 1;
        while (currentNode) {
          myNodeList.push(
            <ItemCard
              node={currentNode}
              key={counter}
              itemNumber={counter}
            />
          )
          counter++
          currentNode = currentNode.forwardNode;
        }
        return myNodeList;
      };
    };

    const ItemCard = (props) => (
      <div className='myAccountCards'>
      <span className='accountName'> {props.itemNumber}. {props.node.item}.....{props.node.amount}</span>
      </div>
    );


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
                <button className='buttons' id='addNewNodeButton' onClick={addButtonFunction}>Add my item</button>
              </div>
            </div>
            <div className='myAccountCards'>
              my items 
              {displayItems(context.linkedList)}
            </div>
            
        </div>    
    )

}
export default LinkedListComp;

