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
        updateBalance:'',
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleBalanceChange = this.handleBalanceChange.bind(this);
      this.handleDepWith = this.handleDepWith.bind(this);
      this.depositFunction = this.depositFunction.bind(this);
      this.withdrawlFunction = this.withdrawlFunction.bind(this);
      this.deleteFunction = this.deleteFunction.bind(this);



      
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

    handleDepWith(event) {
        console.log(event.target.value)
        this.setState({updateBalance: event.target.value})
    }
    
    depositFunction(event) {
        console.log('depositclicked')
        let cardKey = parseInt(event.target.value)
        let accountArr = this.state.accountList.map(function(param){return param.uniqueID;});  
        let index = accountArr.indexOf(cardKey);
        console.log(index, 'index')
        let newBalance = (parseInt(this.state.accountList[index].balance) + parseInt(this.state.updateBalance)).toFixed(2);
        let myAccountArr = this.state.accountList;
        myAccountArr[index].balance = newBalance;
        this.setState({accountList: myAccountArr})
    }

    withdrawlFunction(event) {
        console.log('withdrawl clicked');
        let cardKey = parseInt(event.target.value)
        let accountArr = this.state.accountList.map(function(param){return param.uniqueID;});  
        let index = accountArr.indexOf(cardKey);
        console.log(index, 'index')
        let newBalance = (parseInt(this.state.accountList[index].balance) - parseInt(this.state.updateBalance)).toFixed(2);
        let myAccountArr = this.state.accountList;
        myAccountArr[index].balance = newBalance;
        this.setState({accountList: myAccountArr})
        
    }

    deleteFunction(event) {
        console.log( "deleteclicked", event.target.id)
        let cardKey = parseInt(event.target.value)
        let myAccountArr = this.state.accountList.filter((arr) => arr.uniqueID !== cardKey);
        this.setState({accountList: myAccountArr})
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
                            
                            <NewAccountButton onClick={() => this.createNewAccount()}  />    
                            </div>
                            <div id='displayArea'>
                            <div id='textdisplay'>
                                <AccountTotal accountList={this.state.accountList}/>
                                <HighestBalance accountList={this.state.accountList}/>
                                <LowestBalance accountList={this.state.accountList} />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='myAccountCards' id='myAccountCardsId'>
                        <DisplayAccounts myAccounts={this.state.accountList} onChange={this.handleDepWith} onDeposit ={this.depositFunction} onWithdrawl={this.withdrawlFunction} onDelete={this.deleteFunction}/>
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
            <input className="amountInput" type="text" onChange={props.onChange}/>
            <button className='buttons' value={account.uniqueID} onClick={props.onDeposit} >Deposit</button>
            <button className='buttons' value={account.uniqueID} onClick={props.onWithdrawl} >Withdraw</button>
            <button className='buttons' value={account.uniqueID} onClick={props.onDelete} >DELETE ACCOUNT</button>


        </div>
    )

     }

function HighestBalance(props) {
    console.log(props.accountList)
    if (props.accountList.length > 0) {
    let highestValue = Math.max.apply(Math, props.accountList.map(function(param){return param.balance;}));
    let highestAccount = props.accountList.find(function(param){ return param.balance == highestValue; });
    return (
        <div>Your <b>{highestAccount.name}</b> account is your largest asset with a balance of <b>${highestAccount.balance}</b></div>
    );
    }  else {return null }
}

function LowestBalance(props) {
    console.log(props.accountList)
    if (props.accountList.length > 1) {
    let lowestValue = Math.min.apply(Math, props.accountList.map(function(param){return param.balance;}));
    let lowestAccount = props.accountList.find(function(param){ return param.balance == lowestValue; });
    return (
        <div>Your <b>{lowestAccount.name}</b> account is your smallest asset with a balance of <b>${lowestAccount.balance}</b></div>
    );
    }  else {return null }
}

function AccountTotal(props) {
    if (props.accountList.length > 0) {
        let myArr = [];
        props.accountList.forEach((element) => {
            myArr.push(element.balance);
            return myArr;
        });
        let accountTotals= myArr.reduce((acc, cur) => acc + cur);
        return (
            <div>The sum of your accounts is <b>${accountTotals}</b></div>
        )} else { return null}

}
export default MyAccountComp