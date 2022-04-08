import * as React from 'react';
// ACTIONS
import { SET_SENDING } from 'actions/sending.action';
// SERVICES
import { SendingService } from 'services';
// TYPES
import { SendingBodyType } from 'types/Sending.type';
import { wallet } from 'data';

const sending = (dispatch: React.Dispatch<any>, body: SendingBodyType) => {
    dispatch({ type: SET_SENDING.REQ_SENDING });
    
    if (wallet.uid !== body.uid) {
        dispatch({ type: SET_SENDING.SENDING_FAIL, err: 'data load fail!' });
    }
    dispatch({
        type: SET_SENDING.SENDING_SUCCESS,
        result: wallet.data,
    });
    // SendingService.login(body)
    //     .then((result) => {
    //         dispatch({
    //             type: SET_SENDING.SENDING_SUCCESS,
    //             result,
    //         });
    //     })
    //     .catch((error) => {
    //         dispatch({ type: SET_SENDING.SENDING_FAIL, err: error });
    //     });
};

export default {
    sending,
};
