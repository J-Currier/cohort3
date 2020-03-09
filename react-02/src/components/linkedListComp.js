import React, { useState } from 'react'; 
import { AppContext, ContextProvider } from '../contextMaker';

const LinkedListComp = () => {
    const context = React.useContext(AppContext);

    const [subject, setSubject] = useState('');
    const [amount, setAmount] = useState('');

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
    const moveToFirst = (event) =>{
      context.linkedList.first();
      context.handleStateChange([{state: "current", newState: 'context.linkedList.current'}])
    };

    const moveToLast = (event) =>{
      context.linkedList.last();
      context.handleStateChange([{state: "current", newState: 'context.linkedList.current'}]);
    };

    const goToNext = (event) =>{
      context.linkedList.next(context.linkedList.current);
      context.handleStateChange([{state: "current", newState: 'context.linkedList.current'}]);
    };

    const goToPrevious = (event) =>{
      context.linkedList.previous(context.linkedList.current);
      context.handleStateChange([{state: "current", newState: 'context.linkedList.current'}]);
    };

    const deleteItem = (event) => {
      context.linkedList.delete(context.linkedList.current);
      context.handleStateChange([{state: 'current', newState: 'context.linkedList.current'}]);
    }

    

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
      <span className='accountName' > {props.itemNumber}. {props.node.item}.....{props.node.amount}</span>
      </div>
      );
  
    const DisplayCurrent =(myList) => {
      if (myList.linkedList.current) {
      return(
      <div className='myAccountCards'>
      <span className='accountName'> {myList.linkedList.current.item}...{myList.linkedList.current.amount}</span>
      </div>
      )
      } else {
        console.log('num two')
        return( 'num two')
      }
      }


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
            <div className='myAccountCards' id= 'linkedListControls'>
              Current Item: 
              <DisplayCurrent linkedList={context.linkedList}/>
              <br/>
              <button className='buttons' id='firstButton' onClick={moveToFirst}>Go to first item</button>
              <button className='buttons' id='lastButton' onClick={moveToLast}>Go to last item</button>
              <button className='buttons' id='nextButton' onClick={goToNext}>Next Item</button>
              <button className='buttons' id='backButton' onClick={goToPrevious}>Previoius Item</button>
              <button className='buttons' id='deleteButton' onClick={deleteItem}>Delete Item</button>

            </div>
            <div className='myAccountCards'>
              Items <br/>
              {displayItems(context.linkedList)}
              <span className='accountName'> Total amount: {context.linkedList.total()}</span>

            </div>
            
        </div>    
    )

}
export default LinkedListComp;

