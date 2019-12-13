import React from 'react';
import 'C:/Code/cohort3/react-02/src/App.css';



class MyAccountComp extends React.Component { 
    constructor(props) {
      super(props);

      this.state = { 
        id: 'myAccountComp',
        accountList: [],
        counter: 0,
      };
      
    } 

    createNewAccount(accountName, startingBalance) {
        // creat a for loop to check for same named account

        let myNewAccount = {
            name: accountName,
            balance: startingBalance,
            key: this.state.counter
        }

        this.setState({
           accountList: this.state.accountList.concat(myNewAccount),
           counter: this.state.counter +1,
        });
        console.log(myNewAccount)
        console.log (this.state);

    }

    render() {
        return (
            <div className="App-header">
                <div className='accountsDiv'>
                    <div className='myHeading'>Bank o' Jen
                    </div>
                    <div className='addAccountSection'>
                        <div className='addNewAccountCard'>
                                To add a new account:<br />
                                Give your new account a name pput an input here 
                                {/* <input id='newAccountName' type='text' placeholder="New account name"> */}
                                <br />
                                Enter the starting balance    put an input here
                                {/* <input id='newAccountBalance' type='text' placeholder='New account balance'> */}
                                <br />
                            <div className='buttonDiv'>
                            
                            <NewAccountButton onClick={() => this.createNewAccount('myname', 100)} />    
                            {/* button className='buttons' id='addAccountButton'>Make a New Account!</button> */}
                            </div>
                            <div id='displayArea'>
                            <div id='textdisplay'>
                            </div>
                            <button className='buttons' id='highestAccount'>Highest Balance</button>
                            <button className='buttons' id='lowestAccount'>Lowest Balance</button>
                            <button className='buttons' id='sumAccount'>Account Total</button>
                            </div>
                        </div>
                    </div>
                    <div className='myAccountCards' id='myAccountCardsId'>
                        {/* creat component that maps account list and renders */}
                    </div>
                </div>
            </div>
        )} 

}

function NewAccountButton(props) { 
    console.log('ive been pressed')
        return(
            
                <button className='buttons' id='addAccountButton' onClick={props.onClick}>Make a New Account!</button>
                
            
        );



}


export default MyAccountComp