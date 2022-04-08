import * as React from 'react';
import CommonButton from 'components/CommonButton';
import { closeMenuPopup } from './MenuPopupFn';
import ASSETS from 'assets';
import { ITransfersAsset } from 'types/Sending.type';

interface IModalProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onOptionClicked: (item: ITransfersAsset) => () => void;
    data: ITransfersAsset[];
}

const Modal: React.FunctionComponent<IModalProps> = ({
    setIsOpen,
    onOptionClicked,
    data,
}) => {
    return (
        <div className="modal absolute top-0 left-0 w-full h-full z-20">
            <div className="shadow-bg bg-rn_black opacity-50 w-full h-full"></div>
            <div className="w-rn_336px h-rn_600px rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                <div className="flex items-center justify-center border-b border-rn_light_gray h-rn_60px">
                    <h3 className="text-sm font-medium leading-7 text-center">
                        Assets
                    </h3>
                    <CommonButton
                        classStyle={'block button-ico absolute top-4 right-4'}
                        type="circular"
                        onClickButton={closeMenuPopup(setIsOpen)}
                        icon={ASSETS.CLOSE}
                    />
                </div>
                <ul className="flex flex-col">
                    {data.map((item, index) => (
                        <li
                            className="flex px-5 py-6 items-center hover:bg-rn_light_gray cursor-pointer"
                            onClick={onOptionClicked(item)}
                            key={index}
                        >
                            <img
                                src={item.img}
                                alt={`_${item.transfers.from.currency}`}
                                width={32}
                                height={32}
                            />
                            <div className="flex flex-col ml-4">
                                <p className="font-medium text-sm leading-5 uppercase">
                                    {`${item.transfers.from.amount} ${item.transfers.from.currency}`}
                                </p>
                                <p className="font-normal text-xs leading-5 text-rn_light_gray uppercase">
                                    {`${item.transfers.to.amount} ${item.transfers.to.currency}`}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Modal;
