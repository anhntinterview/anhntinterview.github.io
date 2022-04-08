// PACKAGE
import {
    FieldValues,
    UseFormGetValues,
    UseFormSetValue,
    UseFormTrigger,
} from 'react-hook-form';
// MIDDLEWARE
import authMiddleware from 'middleware/auth.middleware';

export function handleChangePassword(
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

export function onSubmit(
    dispatch: React.Dispatch<any>,
    getValues: UseFormGetValues<FieldValues>
) {
    return () => {
        const password = getValues('password');
        authMiddleware.login(dispatch, { password });
    };
}