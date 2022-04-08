import {
    NormalResponseError,
    IObjectKeys,
} from './Common.type';

export type AuthLoginBodyType = {
    password: string | undefined;
};

export type AuthType = {
    isAuth: boolean,
    uid: string
}

export interface AuthState {
    isLoading: boolean;
    result: AuthType | undefined;
    params: string;
    status: string;
    err: NormalResponseError | undefined;
}

export interface AuthAction extends AuthState {
    type: string;
}

// *** AUTH LOCAL STORAGE ***
export interface AuthLocalStorageType extends IObjectKeys {
    isAuth: boolean
}

