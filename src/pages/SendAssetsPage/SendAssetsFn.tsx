// PACKAGE
import {
    FieldValues,
    UseFormGetValues,
    UseFormSetValue,
    UseFormTrigger,
} from 'react-hook-form';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import { ITransfersAsset } from 'types/Sending.type';

export function handleSending(
    setValue: UseFormSetValue<FieldValues>,
    trigger: UseFormTrigger<FieldValues>,
    setErrorMsg: React.Dispatch<React.SetStateAction<string | undefined>>
) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setValue('password', value);
        trigger('password');
        setErrorMsg(undefined);
    };
}

export function openModal(
    setModal: React.Dispatch<React.SetStateAction<boolean>>
) {
    return (e: React.SyntheticEvent) => {
        e.preventDefault();
        setModal(true);
    };
}

export function hanldeCurrenrCurrency(
    currentCurrency: number,
    setValue: UseFormSetValue<FieldValues>
) {
    return (e: React.SyntheticEvent) => {
        e.preventDefault();
        setValue('amount', currentCurrency);
    };
}

export function handleChangeToWallet(
    setValue: UseFormSetValue<FieldValues>,
    trigger: UseFormTrigger<FieldValues>
) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setValue('to', value);
        trigger('to');
    };
}

export function handleChangeCurrencyAmount(
    maxAmount: number,
    setValue: UseFormSetValue<FieldValues>,
    trigger: UseFormTrigger<FieldValues>
) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        const { valueAsNumber } = event.target;
        const rs =  valueAsNumber <= maxAmount ? valueAsNumber : maxAmount
        setValue('amount', rs);
        trigger('amount');
    };
}

export function onSendAssetsSubmit(
    getValues: UseFormGetValues<FieldValues>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    selectedOption: ITransfersAsset
) {
    return () => {
        setModal(true);
        const from = getValues('from');
        const to = getValues('to');
        const amount = getValues('amount');
        console.log(from, to, selectedOption.transfers.from.currency, amount);
    };
}
