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
    
    depositFunction(event) {
        console.log( "depositclicked", event.target.id)

    }

    withdrawlFunction(event) {
        console.log( "withdrawclicked", event.target.id)
        
    }

    deleteFunction(event) {
        console.log( "deleteclicked", event.target.id)
        
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
                        <DisplayAccounts myAccounts={this.state.accountList} onDeposit ={this.depositFunction} onWithdrawl={this.withdrawlFunction} onDelete={this.deleteFunction}/>
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
const cardList = props.myAccounts.map((account) => <li key={account.uniqueID.toString()}> {CreateNewCardFunction(account, props)}</li>);
    return <ul className="unstyled">{cardList}</ul>;
}

function CreateNewCardFunction(account, props) {

    return (
        
        <div className="cards" id={account.name} key={account.uniqueID} >
            <div className='accountCardHeader' >{account.name}</div>
            <div className='accountCardBalance'>Your balance is ${account.balance}</div>
            <div className="amountInput" > input field here</div>
            <button className='buttons' id={account.uniqueID} onClick={props.onDeposit} value='deposit'>Deposit</button>
            <button className='buttons' id={account.uniqueID} onClick={props.onWithdrawl} value='withdraw'>Withdraw</button>
            <button className='buttons' id={account.uniqueID} onClick={props.onDelete} value='delete'>DELETE ACCOUNT</button>


        </div>
    )

 

    }


export default MyAccountComp