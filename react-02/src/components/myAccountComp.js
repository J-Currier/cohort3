import React from 'react';
import 'C:/Code/cohort3/react-02/src/App.css';



class MyAccountComp extends React.Component { 
    constructor(props) {
      super(props);

      this.state = { 
        id: 'myAccountComp',
        accountList: [],
        counter: 0,
        accountName: '',
        accountBalance: '',
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleBalanceChange = this.handleBalanceChange.bind(this);


      
    } 

    createNewAccount() {
        // creat a for loop to check for same named account

        let myNewAccount = {
            name: this.state.accountName,
            balance: parseFloat(this.state.accountBalance).toFixed(2),
            uniqueID: this.state.counter
        }

        this.setState({
           accountList: this.state.accountList.concat(myNewAccount),
           counter: this.state.counter +1,
        });
        this.setState({
            accountName: '',
            accountBalance: '',
        });

    }

    handleNameChange(event) {
        this.setState({accountName: event.target.value});
    }

    handleBalanceChange(event) {
        this.setState({accountBalance: event.target.value});
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
                                Give your new account a name 
                                <input type="text" value={this.state.accountName} onChange={this.handleNameChange} />
                                <br />
                                Enter the starting balance   <br /> 
                                $<input type="text" value={this.state.accountBalance} onChange={this.handleBalanceChange} />
                                <br />
                            <div className='buttonDiv'>
                            
                            <NewAccountButton onClick={() => this.createNewAccount()} />    
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
                        <DisplayAccounts myAccounts={this.state.accountList}/>
                    </div>
                </div>
            </div>
        )} 

}

function NewAccountButton(props) { 
        return(
                <button className='buttons' id='addAccountButton' onClick={props.onClick}>Make a New Account!</button>
        );

}


function DisplayAccounts(props) {
const cardList = props.myAccounts.map((account) => <li key={account.uniqueID.toString()}> {CreateNewCardFunction(account)}</li>);
    return <ul>{cardList}</ul>;
}

function CreateNewCardFunction(account) {

    let currencyBalance = parseFloat(account.balance);
    
    return (

        <div className="cards" id={account.name} key={account.uniqueID} >
            <div className='accountCardHeader' >{account.name}</div>
        </div>
    )

    

// //     const newAccountCard = document.createElement('div');
// //     newAccountCard.setAttribute('class', 'cards');
// //     newAccountCard.setAttribute('id', newAccountName);
// //     newAccountCard.setAttribute('key', counter);
// //     console.log(newAccountCard);

//     let titleDiv = document.createElement('div');
//     titleDiv.setAttribute('class', 'accountCardHeader')
//     let newId = newAccountName + 'Title';
//     titleDiv.setAttribute('id', newId);
//     titleDiv.innerHTML = newAccountName;
//     newAccountCard.appendChild(titleDiv);

//     let balanceDiv = document.createElement('div');
//     balanceDiv.setAttribute('class', 'accountCardBalance')
//     let newBalId = newAccountName + 'Balance';
//     balanceDiv.setAttribute('id', newBalId);
//     balanceDiv.innerHTML = `Your balance is $${currencyBalance}`;
//     newAccountCard.appendChild(balanceDiv);

//     let inputField = document.createElement('input');
//     inputField.setAttribute('class', 'amountInput');
//     inputField.setAttribute('type', 'text')

//     let newInputId = newAccountName + 'input';
//     inputField.setAttribute('id', newInputId);
//     inputField.setAttribute('placeholder', 'enter amount');
//     newAccountCard.appendChild(inputField);

//     let brTag = document.createElement('br');
//     newAccountCard.appendChild(brTag);

//     let depositbutton = document.createElement('button');
//     depositbutton.setAttribute('class', 'buttons');
//     depositbutton.innerHTML = 'Deposit';
//     depositbutton.value = 'deposit';
//     newAccountCard.appendChild(depositbutton);


//     let withdrawbutton = document.createElement('button');
//     withdrawbutton.setAttribute('class', 'buttons');
//     withdrawbutton.innerHTML = 'Withdraw';
//     withdrawbutton.value = 'withdraw';
//     newAccountCard.appendChild(withdrawbutton);

//     let deletebutton = document.createElement('button');
//     deletebutton.setAttribute('class', 'buttons');
//     deletebutton.innerHTML = 'DELETE';
//     deletebutton.value = 'delete';
//     newAccountCard.appendChild(deletebutton);

//     return newAccountCard;
// },

    }


export default MyAccountComp