import * as React from 'react';
// PACKAGE
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
// ASSETS
import ASSETS from 'assets';
// FUNCTIONS
import { handleAssetData } from './MainPageFn';
// CONTEXTS
import { SendingContext } from 'contexts/Sending/SendingContext';
import SendAssetsPage from 'pages/SendAssetsPage';

export interface IMainPageProps {}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
    let { path, url } = useRouteMatch();
    const {
        sendingState: { result, status, err },
        dispatch,
    } = React.useContext(SendingContext);

    const localStorageUid: string = localStorage.getItem('uid');

    React.useEffect(() => {
        handleAssetData(dispatch, localStorageUid);
    }, []);

    if (status !== 'done') {
        return <div className="">Loading ...</div>;
    }

    const data = result.filter(
        (item) => item.transfers.from.currency !== 'usd'
    );

    const usdAsset = result.filter(
        (item) => item.transfers.from.currency === 'usd'
    )[0];

    return (
        <Switch>
            <Route path={`${path}sending`}>
                <SendAssetsPage
                    localStorageUid={localStorageUid}
                    data={result}
                />
            </Route>
            <Route exact path={path}>
                <div className="home bg-main_bg bg-rn_bg_pos p-5">
                    <div className="flex justify-between">
                        <div className="w-rn_126px h-8 bg-rn_light_gray rounded-lg flex items-center text-xs">
                            <img
                                className="ml-3"
                                src={ASSETS.BDOT}
                                alt="_blue-dot"
                            />
                            <label
                                className="block ml-3 text-rn_black"
                                htmlFor="_rnwl"
                            >
                                Ronin Wallet
                            </label>
                        </div>
                        <div className="w-8 h-8 bg-rn_light_gray rounded-lg flex items-center justify-center">
                            <img src={ASSETS.USER} alt="_avatar" />
                        </div>
                    </div>
                    <div className="jumbotron mt-5 flex flex-col px-5 py-rn_18px justify-center">
                        <div className="flex justify-between pb-rn_14px border-b border-rn_light_blue">
                            <p className="font-light text-white text-sm tracking-wide">
                                My Wallet{' '}
                                <span className="text-rn_light_blue font-light ml-2">
                                    {`(${localStorageUid})`}
                                </span>
                            </p>
                            <button className="button-ico cursor-pointer">
                                <img src={ASSETS.COPY} alt="_copy" />
                            </button>
                        </div>

                        <div className="flex justify-between mt-3">
                            <div className="flex flex-col">
                                <p className="font-bold text-rn_32px leading-10 text-white uppercase">
                                    {`${usdAsset.transfers.from.amount} ${usdAsset.transfers.from.currency}`}
                                </p>
                                <p className="font-light text-base leading-6 text-rn_light_blue mt-1 uppercase">
                                    {`${usdAsset.transfers.to.amount} ${usdAsset.transfers.to.currency}`}
                                </p>
                            </div>
                            <img src={ASSETS.WLOGO} alt="_alt-logo" />
                        </div>
                    </div>
                    <ul className="mt-7 flex items-center justify-center">
                        <li className="flex flex-col mr-6 opacity-50 hover:opacity-100 cursor-pointer">
                            <div className="flex w-12 h-12 bg-rn_light_gray rounded-lg justify-center items-center">
                                <img src={ASSETS.DEPOSIT} alt="_deposit" />
                            </div>
                            <label
                                className="mt-1 leading-5 text-xs font-medium items-center justify-center flex"
                                htmlFor="_deposit"
                            >
                                Deposit
                            </label>
                        </li>
                        <li className="flex flex-col mr-6 opacity-50 hover:opacity-100 cursor-pointer">
                            <Link to={`${url}sending`}>
                                <div className="flex w-12 h-12 bg-rn_light_gray rounded-lg justify-center items-center">
                                    <img src={ASSETS.SEND} alt="_send" />
                                </div>
                                <label
                                    className="mt-1 leading-5 text-xs font-medium items-center justify-center flex"
                                    htmlFor="_send"
                                >
                                    Send
                                </label>
                            </Link>
                        </li>
                        <li className="flex flex-col opacity-50 hover:opacity-100 cursor-pointer">
                            <div className="flex w-12 h-12 bg-rn_light_gray rounded-lg justify-center items-center">
                                <img src={ASSETS.SWAP} alt="_swap" />
                            </div>
                            <label
                                className="mt-1 leading-5 text-xs font-medium items-center justify-center flex"
                                htmlFor="_swap"
                            >
                                Swap
                            </label>
                        </li>
                    </ul>
                    <h2 className="font-medium tracking-wide text-base leading-5 mt-2 mb-3 ml-5">
                        Assets
                    </h2>
                    <ul className="flex flex-col">
                        {data.map((item, index) => (
                            <li
                                className="py-4 px-5 bg-rn_light_gray rounded-lg mb-2"
                                key={index}
                            >
                                <div className="flex">
                                    <img
                                        src={item.img}
                                        alt={`_${item.transfers.from.currency}`}
                                    />
                                    <div className="flex flex-col ml-4">
                                        <p className="font-medium text-sm leading-5 uppercase">
                                            {`${item.transfers.from.amount} ${item.transfers.from.currency}`}
                                        </p>
                                        <p className="mt-1 text-rn_light_gray leading-4 text-xs font-light uppercase">
                                            {`${item.transfers.to.amount} ${item.transfers.to.currency}`}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Route>
        </Switch>
    );
};

export default MainPage;
