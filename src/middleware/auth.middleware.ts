import * as React from 'react';
// ACTIONS
import { SET_AUTH } from 'actions/auth.action';
// SERVICES
import { AuthService } from 'services';
// TYPES
import { AuthLoginBodyType } from 'types/Auth.type';
import { wallet } from 'data';

const login = (dispatch: React.Dispatch<any>, body: AuthLoginBodyType) => {
    dispatch({ type: SET_AUTH.REQ_AUTH });
    if (body.password !== wallet.password) {
        dispatch({
            type: SET_AUTH.LOGIN_FAIL,
            err: 'login was fail!',
        });
    }
    dispatch({
        type: SET_AUTH.LOGIN_SUCCESS,
        result: {
            isAuth: true,
            uid: wallet.uid,
        },
    });
    // AuthService.login(body)
    //     .then((result) => {
    //         dispatch({
    //             type: SET_AUTH.LOGIN_SUCCESS,
    //             result,
    //         });
    //         localStorage.setItem('isAuth', JSON.stringify(result));
    //     })
    //     .catch((error) => {
    //         dispatch({ type: SET_AUTH.LOGIN_FAIL, err: error });
    //     });
};

export default {
    login,
};
