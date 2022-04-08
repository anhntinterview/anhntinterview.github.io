import * as React from 'react';
// PACKAGE
import { Switch } from 'react-router-dom';
// COMPONENTS
import UnlockWalletPage from 'pages/UnlockWalletPage';
// PAGES
import PrivateRoute from './PrivateRoute';
import CommonRoute from './CommonRoute';
import MainPage from 'pages/MainPage';

type RoutesProps = {
    isAuth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const routes = (props: RoutesProps) => {
    const { isAuth, setAuth } = props;

    return (
        <Switch>
            <CommonRoute
                path="/locked"
                component={UnlockWalletPage}
                setAuth={setAuth}
                isAuth={isAuth}
            />
            <PrivateRoute
                path="/"
                component={MainPage}
                setAuth={setAuth}
                isAuth={isAuth}
            />
        </Switch>
    );
};

export default routes;
