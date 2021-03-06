import * as React from 'react';
// PACKAGE
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';
// COMPONENTS
import CustomSelectBox from 'components/CustomSelectBox';
import CommonButton from 'components/CommonButton';
import Modal from 'components/Modal';
// FUNCTIONS
import {
    handleChangeCurrencyAmount,
    handleChangeToWallet,
    hanldeCurrenrCurrency,
    onSendAssetsSubmit,
    openModal,
} from './SendAssetsFn';
// CONTEXTS
import ASSETS from 'assets';
// TYPES
import { ITransfersAsset } from 'types/Sending.type';
import { FORM_ERROR } from 'constant/form.const';

export interface ISendAssetsPageProps {
    localStorageUid: string;
    data: ITransfersAsset[];
}

const SendAssetsPage: React.FunctionComponent<ISendAssetsPageProps> = ({
    localStorageUid,
    data,
}) => {
    const initSelectedOption = {
        img: data[0].img,
        transfers: {
            from: {
                amount: data[0].transfers.from.amount,
                currency: data[0].transfers.from.currency,
            },
            to: {
                amount: data[0].transfers.to.amount,
                currency: data[0].transfers.to.currency,
            },
        },
    };
    const [isModal, setModal] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<ITransfersAsset>(
        initSelectedOption
    );
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        trigger,
        formState: { errors },
    } = useForm();

    const convertCurrentAmount = parseFloat(
        selectedOption.transfers.from.amount.replace(',', '')
    );

    const isExceedingLimit = getValues('amount') > convertCurrentAmount;

    return (
        <div className="send-assets p-5 relative">
            <div className="flex header items-center justify-center">
                <Link to="/" className="absolute left-5 button-ico">
                    <img src={ASSETS.LARROW} alt="_left-arrow" />
                </Link>
                <h2 className=" text-rn_black text-sm leading-5 font-medium">
                    Send Assets
                </h2>
            </div>
            <form
                className="flex flex-col justify-between items-center content"
                onSubmit={handleSubmit(
                    onSendAssetsSubmit(getValues, setModal, selectedOption)
                )}
            >
                <div className="w-full">
                    <div className="flex flex-col">
                        <label className="uppercase text-rn_10px text-base ml-2 mt-6">
                            from
                        </label>
                        <div className="flex justify-center items-center w-full">
                            <input
                                className="w-full"
                                type="text"
                                readOnly
                                value={`My Wallet (${localStorageUid})`}
                                {...register('from', {
                                    required: true,
                                    setValueAs: (value: any) => value.trim(),
                                })}
                                name="from"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-rn_10px text-base ml-2 mt-4">
                            to
                        </label>
                        <div className="flex justify-center items-center w-full">
                            <input
                                className="w-full"
                                type="number"
                                {...register('to', {
                                    required: true,
                                    valueAsNumber: true,
                                    setValueAs: (value: any) => value.trim(),
                                })}
                                onChange={handleChangeToWallet(
                                    setValue,
                                    trigger
                                )}
                            />
                        </div>
                        {errors?.to?.type === 'required' && (
                            <span className="text-red-500 text-sm leading-5 font-normal">
                                {FORM_ERROR.IS_REQUIRED}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-rn_10px text-base ml-2 mt-4">
                            asset
                        </label>
                        <div className="flex justify-center items-center w-full">
                            <CustomSelectBox
                                data={data}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                                setValue={setValue}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between  mt-4">
                            <label className="uppercase text-rn_10px text-base ml-2">
                                amount
                            </label>
                            <label className="uppercase text-rn_10px text-base">
                                available:{' '}
                                {`${selectedOption.transfers.from.amount} ${selectedOption.transfers.from.currency}`}
                            </label>
                        </div>

                        <div className="flex flex-col justify-center items-center w-full relative">
                            <div className="flex flex-col w-full">
                                <input
                                    className="w-full"
                                    type="number"
                                    {...register('amount', {
                                        required: true,
                                        setValueAs: (value: any) =>
                                            value.trim(),
                                        valueAsNumber: true,
                                    })}
                                    onChange={handleChangeCurrencyAmount(
                                        setValue,
                                        trigger
                                    )}
                                />
                            </div>
                            <CommonButton
                                classStyle={
                                    'uppercase w-rn_41px h-5 bg-rn_light_gray max-button text-center absolute right-3 top-1/4'
                                }
                                type="circular"
                                title="max"
                                onClickButton={hanldeCurrenrCurrency(
                                    convertCurrentAmount,
                                    setValue
                                )}
                            />
                        </div>
                        {errors?.amount?.type === 'required' && (
                            <span className="text-red-500 text-sm leading-5 font-normal">
                                {FORM_ERROR.IS_REQUIRED}
                            </span>
                        )}
                        {isExceedingLimit && (
                            <span className="text-red-500 text-sm leading-5 font-normal">
                                {`${FORM_ERROR.MAX_VALUE} ${convertCurrentAmount} ${selectedOption.transfers.from.currency}`}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex w-full">
                    <Link
                        to="/"
                        className={
                            'flex justify-center items-center button-cancel w-40 h-10 mr-4'
                        }
                    >
                        Cancel
                    </Link>
                    <CommonButton
                        classStyle={'block button-primary w-40 h-10'}
                        type="circular"
                        title="Send"
                        conditionDisable={isExceedingLimit}
                    />
                </div>
            </form>
            {isModal && (
                <Modal
                    setModal={setModal}
                    currentCurrency={selectedOption.transfers.from.currency}
                />
            )}
        </div>
    );
};

export default SendAssetsPage;
