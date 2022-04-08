import * as React from 'react';
import CommonButton from 'components/CommonButton';
import { closeModal, blockDOMEvent } from './ModalFn';

interface IModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    currentCurrency: string;
}

const Modal: React.FunctionComponent<IModalProps> = ({
    setModal,
    currentCurrency,
}) => {
    return (
        <div
            onClick={closeModal(setModal)}
            className="modal absolute top-0 left-0 w-full h-full"
        >
            <div className="shadow-bg bg-rn_black opacity-50 w-full h-full"></div>
            <div
                className="w-rn_336px h-rn_202px p-5 rounded-2xl absolute left-1/2 transform -translate-x-1/2 top-rn_131px bg-white"
                onClick={blockDOMEvent()}
            >
                <h3 className="text-xl font-medium leading-7 text-center">
                    Successfully sent
                </h3>
                <p className="text-sm font-light leading-5 mt-6">
                    Your{' '}
                    <strong className="font-bold uppercase">{currentCurrency}</strong> has
                    been sent!
                    <br /> Thank you for using our service
                </p>
                <CommonButton
                    classStyle={'button-primary w-full mt-6 px-0'}
                    type="circular"
                    title="OK"
                    onClickButton={closeModal(setModal)}
                />
            </div>
        </div>
    );
};

export default Modal;
