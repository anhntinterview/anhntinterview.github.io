import { ITransfersAsset, WalletType } from 'types/Sending.type';
import ASSETS from 'assets';

export const assetData: ITransfersAsset[] = [
    {
        img: ASSETS.USD,
        transfers: {
            from: {
                amount: '1,000',
                currency: 'usd',
            },
            to: {
                amount: '23,046,000',
                currency: 'vnd',
            },
        },
    },
    {
        img: ASSETS.EURO,
        transfers: {
            from: {
                amount: '50',
                currency: 'eur',
            },
            to: {
                amount: '1,531,972',
                currency: 'vnd',
            },
        },
    },
    {
        img: ASSETS.YEN,
        transfers: {
            from: {
                amount: '2,000',
                currency: 'yen',
            },
            to: {
                amount: '2,103,317',
                currency: 'vnd',
            },
        },
    },
];

export const wallet: WalletType = {
    uid: `7300 3777 3888 3334`,
    password: 'tfbH@3041975Please!',
    data: assetData
};
