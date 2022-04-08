import { SET_AUTH } from 'actions/auth.action';
import { AuthState, AuthAction } from 'types/Auth.type';

export default function authReducer(state: AuthState, action: AuthAction) {
    switch (action.type) {
        // LOGIN
        case SET_AUTH.REQ_AUTH:
            return {
                ...state,
                isLoading: true,
                params: action.params,
                status: 'pending',
            };
        case SET_AUTH.LOGIN_SUCCESS:
            localStorage.setItem('isAuth', `${action.result.isAuth}`);
            localStorage.setItem('uid', `${action.result.uid}`);
            return {
                ...state,
                isLoading: false,
                result: action.result,
                status: 'done',
                err: undefined,
            };
        case SET_AUTH.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                err: action.err && action.err,
                status: 'fail',
            };
    }
}
