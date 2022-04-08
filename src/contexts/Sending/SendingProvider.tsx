import React, { useReducer } from 'react';
import { SendingContext } from './SendingContext';
import reducers from 'reducers';
import { initSendingState } from 'state/Sending/sending.state';

const SendingProvider: React.FC = ({ children }) => {
    const [sendingState, dispatch] = useReducer(
        reducers.sendingReducer,
        initSendingState
    );
    return (
        <SendingContext.Provider value={{ sendingState, dispatch }}>
            {children}
        </SendingContext.Provider>
    );
};

export default SendingProvider;
