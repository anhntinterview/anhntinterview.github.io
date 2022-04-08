// PACKAGE
import {
    FieldValues,
    UseFormGetValues,
    UseFormSetValue,
    UseFormTrigger,
} from 'react-hook-form';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';

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
    setCurrentCurrencyAmount: React.Dispatch<React.SetStateAction<number>>
) {
    return (e: React.SyntheticEvent) => {
        e.preventDefault();
        setCurrentCurrencyAmount(currentCurrency);
    };
}

export function handleChangeToWallet(
    setValue: UseFormSetValue<FieldValues>,
    trigger: UseFormTrigger<FieldValues>,
) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setValue('to', value);
        trigger('to');
    };
}

export function handleChangeCurrencyAmount(
    maxAmount: number,
    setCurrentAmount: React.Dispatch<React.SetStateAction<number>>,
    trigger: UseFormTrigger<FieldValues>
) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCurrentAmount(() => {
            return parseFloat(value) <= maxAmount
                ? parseFloat(value)
                : maxAmount;
        });
        trigger('amount');
    };
}

export function onSubmit(getValues: UseFormGetValues<FieldValues>) {
    return () => {
        const from = getValues('from');
        const to = getValues('to');
        const asset = getValues('asset');
        const amount = getValues('amount');
        console.log(from, to, asset, amount);
    };
}
