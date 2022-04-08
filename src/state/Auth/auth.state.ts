import { AuthState, AuthLocalStorageType } from 'types/Auth.type';

export const initAuthLocalStorage: AuthLocalStorageType = {
    isAuth: false
};

export const initAuthState: AuthState = {
    isLoading: false,
    result: undefined,
    params: '',
    status: '',
    err: undefined,
};
