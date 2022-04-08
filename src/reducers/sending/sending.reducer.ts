import {SET_SENDING} from 'actions/sending.action';
import {SendingState, SendingAction} from 'types/Sending.type';

export default function sendingReducer(state: SendingState, action: SendingAction) {
    switch (action.type) {
        // LOGIN
        case SET_SENDING.REQ_SENDING:
            return {
                ...state,
                isLoading: true,
                params: action.params,
                status: 'pending',
            };
        case SET_SENDING.SENDING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                result: action.result,
                status: 'done',
                err: undefined,
            };
        case SET_SENDING.SENDING_FAIL:
            return {
                ...state,
                isLoading: false,
                err: action.err && action.err,
                status: 'fail',
            };
    }
}
