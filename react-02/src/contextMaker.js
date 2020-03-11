import React from 'react';
import App from './App.js';
import { LinkedList } from './components/linklist.js';
import { LifoFifoList } from './components/lifoFifoController.js';


export const AppContext = React.createContext();

export class ContextProvider extends React.Component {
   
    linkedList = new LinkedList();
    stack = new LifoFifoList(true);
    queue = new LifoFifoList(false);

    
    state = {
        //linkedListStates
        current: '',
        //LIFO/FIFO States
        newestItem: '',
        deletedItem: '',
        LIFOFIFOList: [],

    };
   


    componentDidMount() {
        fetch('http://numbersapi.com/1..100')
            .then(apiData => {
                    return apiData.json();
            }).then(apiData => {
                this.setState({LIFOFIFOList: apiData});
            });
            
        
    };



    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    handleStateChange = (states) => {
        for (let i = 0; i < states.length; i++) {
            this.setState({
                [states[i].state]: states[i].newState,
            })
    }
};



    render() {
        return(
    
        <AppContext.Provider
            value={{
                linkedList: this.linkedList,
                state: this.state,
                LIFOFIFOList: this.LIFOFIFOList,
                handleOnChange: this.handleOnChange,
                handleStateChange: this.handleStateChange,
            }}
        >
            <App />
        </AppContext.Provider>
        )
        };
    
};


