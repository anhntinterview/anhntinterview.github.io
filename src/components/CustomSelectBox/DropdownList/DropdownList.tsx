import * as React from 'react';
import styled from 'styled-components';
import { ITransfersAsset } from 'types/Sending.type';

const DropDownListContainer = styled('div')`
    position: absolute;
    z-index: 100;
    width: calc(100% - 40px);
`;

const DropDownList = styled('ul')`
    cursor: pointer;
    padding: 0;
    margin: 0;
    padding-left: 16px;
    background: #ffffff;
    border: 1px solid #c5cee0;
    border-radius: 8px;
    box-sizing: border-box;
    color: #8f9bb3;
    &:first-child {
        padding: 0.8em;
    }
`;

const ListItem = styled('li')`
    display: flex;
    align-items: center;
    width: 100%;
    list-style: none;
    margin-bottom: 0.8em;
    &:hover {
        color: #151a30;
    }
`;

interface IDropdownListProps {
    onOptionClicked: (item: ITransfersAsset) => () => void;
    data: ITransfersAsset[];
}

const DropdownList: React.FunctionComponent<IDropdownListProps> = ({
    onOptionClicked,
    data,
}) => {
    return (
        <DropDownListContainer>
            <DropDownList>
                {data.map((item, index) => (
                    <ListItem onClick={onOptionClicked(item)} key={index}>
                        <div className="flex items-center">
                            <img
                                width={24}
                                height={24}
                                src={item.img}
                                alt="_currency-avatar"
                            />
                            <label className="ml-2 uppercase" htmlFor="_cn">
                                {item.transfers.from.currency}
                            </label>
                        </div>
                    </ListItem>
                ))}
            </DropDownList>
        </DropDownListContainer>
    );
};

export default DropdownList;
