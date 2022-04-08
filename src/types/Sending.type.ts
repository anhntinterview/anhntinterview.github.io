import { NormalResponseError } from './Common.type';

export type WalletType = {
    uid: string;
    password: string;
    data: ITransfersAsset[]
};

export type SendingBodyType = {
    uid: string | undefined;
};

export interface ITransfersAsset {
    img: string;
    transfers: {
        from: {
            amount: string;
            currency: string;
        };
        to: {
            amount: string;
            currency: string;
        };
    };
}

export interface SendingState {
    isLoading: boolean;
    result: ITransfersAsset[] | undefined;
    params: string;
    status: string;
    err: NormalResponseError | undefined;
}

export interface SendingAction extends SendingState {
    type: string;
}
