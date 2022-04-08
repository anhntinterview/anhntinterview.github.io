import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ASSETS from 'assets';
import MenuPopup from 'components/Modal/MenuPopup';
import { ITransfersAsset } from 'types/Sending.type';

interface ICustomSelectBoxProps {
    data: ITransfersAsset[];
    selectedOption: ITransfersAsset;
    setSelectedOption: React.Dispatch<React.SetStateAction<ITransfersAsset>>;
}

const Main = styled('div')`
    width: 100%;
    postion: relative;
    height: 40px;
    background-image: url(${ASSETS.STACK});
    background-repeat: no-repeat;
    background-position: 95% 45%;
    border: 1px solid #c5cee0;
    box-sizing: border-box;
    border-radius: 8px;
    color: #151a30;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`;

const DropDownContainer = styled('div')`
    width: 100%;
    postion: relative;
`;

const DropDownHeader = styled('div')`
    padding-left: 16px;
    width: 100%;
`;

const CustomSelectBox: React.FunctionComponent<ICustomSelectBoxProps> = ({
    data,
    selectedOption,
    setSelectedOption,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (item: ITransfersAsset) => () => {
        setSelectedOption(() => ({
            img: item.img,
            transfers: {
                from: {
                    amount: item.transfers.from.amount,
                    currency: item.transfers.from.currency,
                },
                to: {
                    amount: item.transfers.to.amount,
                    currency: item.transfers.to.currency,
                },
            },
        }));
        setIsOpen(false);
    };

    return (
        <Main>
            <DropDownContainer>
                <DropDownHeader onClick={toggling}>
                    <div className="flex items-center">
                        <img
                            width={24}
                            height={24}
                            src={selectedOption.img}
                            alt="_cd"
                        />
                        <label className="ml-2 uppercase" htmlFor="_cn">
                            {selectedOption.transfers.from.currency}
                        </label>
                    </div>
                </DropDownHeader>
                {isOpen && (
                    <MenuPopup
                        setIsOpen={setIsOpen}
                        onOptionClicked={onOptionClicked}
                        data={data}
                    />
                )}
            </DropDownContainer>
        </Main>
    );
};

export default CustomSelectBox;
