import React from 'react';
import App from './App.js';
import { LinkedList } from './components/linklist.js';


export const AppContext = React.createContext();

export class ContextProvider extends React.Component {
    linkedList = new LinkedList();

    state = {
        //linkedListStates
        current: '',
        //LIFO/FIFO States
        newestItem: '',
        deletedItem: '',
        LIFOFIFOList: [],
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
    return (
        <AppContext.Provider
            value={{
                linkedList: this.linkedList,
                state: this.state,
                handleOnChange: this.handleOnChange,
                handleStateChange: this.handleStateChange,
            }}
        >
            <App />
        </AppContext.Provider>
    )
        };
};


