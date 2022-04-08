import { Dispatch, createContext } from 'react';
// STATE
import { initSendingState } from 'state/Sending/sending.state';

// TYPES
import {SendingAction, SendingState} from 'types/Sending.type';

export const SendingContext = createContext<{
    sendingState: SendingState;
    dispatch: Dispatch<SendingAction>;
}>({
    sendingState: initSendingState,
    dispatch: () => null,
});
