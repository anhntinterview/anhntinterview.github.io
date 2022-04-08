import * as React from 'react';
// PACKAFE
import { useForm } from 'react-hook-form';
// ASSETS
import ASSETS from 'assets';
// COMPONENTS
import PasswordWithEyes from 'components/PasswordWithEyes';
import CommonButton from 'components/CommonButton';
import { AuthContext } from 'contexts/Auth/AuthContext';
// CONSTANTS
import { FORM_ERROR } from 'constant/form.const';
// FUNCTIONS
import { handleChangePassword, onSubmit } from './UnlockWalletFn';

export interface IUnlockWalletProps {}

const UnlockWallet: React.FunctionComponent<IUnlockWalletProps> = (props) => {
    const [errorMsg, setErrorMsg] = React.useState<string>();

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        trigger,
        formState: { errors },
    } = useForm();

    const { authState, dispatch } = React.useContext(AuthContext);
    const { result, isLoading } = authState;
    const authError = authState.err;

    return (
        <div className="unlock-wallet">
            <div className="px-5 pt-rn_62px text-center relative">
                <div className="">
                    <img src={ASSETS.BG1} alt="bg_01" width="100%" />
                    <img
                        className="margin-auto absolute left-1/2 transform -translate-x-1/2 top-24"
                        src={ASSETS.LOGO}
                        alt="logo"
                    />
                </div>
                <h2 className="font-bold text-rn_32px leading-10 mt-6">
                    Ronin Wallet
                </h2>
                <h3 className="text-sm font-normal leading-5 mt-2">
                    Your Digital Passport
                </h3>

                <form className="" onSubmit={handleSubmit(onSubmit(dispatch, getValues))}>
                    <div className="flex flex-col items-start">
                        <label className="uppercase text-rn_10px text-base ml-2 mt-6">
                            enter password
                        </label>
                        <div className="flex flex-col justify-center items-center w-full">
                            <PasswordWithEyes
                                formProps={register('password', {
                                    required: true,
                                    pattern: FORM_ERROR.PASSWORD_REGEX,
                                })}
                                onChange={handleChangePassword(
                                    setValue,
                                    trigger,
                                    setErrorMsg
                                )}
                            />
                            {errors?.password?.type === 'required' && (
                                <span className="text-red-500 text-sm leading-5 font-normal">
                                    {FORM_ERROR.IS_REQUIRED}
                                </span>
                            )}
                            {(errors?.password?.type === 'pattern' ||
                                errors?.confirm_password?.type ===
                                    'pattern') && (
                                <span className="text-red-500 text-sm leading-5 font-normal">
                                    {FORM_ERROR.PASSWORD_VALIDATE}
                                </span>
                            )}
                            <CommonButton
                                classStyle={'block mt-6 button-primary'}
                                type="circular"
                                loading={isLoading}
                                title="Unlock"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UnlockWallet;
