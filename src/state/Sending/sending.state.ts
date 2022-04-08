import { SendingState } from 'types/Sending.type';

export const initSendingState: SendingState = {
    isLoading: false,
    result: undefined,
    params: '',
    status: '',
    err: undefined,
};
