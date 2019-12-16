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
        console.log(myNewAccount)
        console.log (this.state);
        this.setState({
            accountName: '',
            accountBalance: '',
        });

        // DisplayAccounts(this.state.accountList);
    }

    handleNameChange(event) {
        this.setState({accountName: event.target.value});
        console.log(this.state.accountName)
    }

    handleBalanceChange(event) {
        this.setState({accountBalance: event.target.value});
        console.log(this.state.accountBalance)
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
                        <DisplayAccounts myAccounts={this.state.accountList}/>
                        {/* creat component that maps account list and renders */}
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
    console.log('display accounts');
    // const myAccounts = this.state.accountList
    const cardList = props.myAccounts.map((account) => <li key={account.uniqueID.toString()}> {account.name}</li>);
    return <ul>{cardList}</ul>;
}

// put creat card function here



export default MyAccountComp