import * as React from 'react';
// PACKAGE
import { BrowserRouter } from 'react-router-dom';
// CONTEXTS
import { AuthContext } from 'contexts/Auth/AuthContext';
// ROUTE
import Routes from 'routes';
// UTILS
import { requestAccessPermission } from 'utils/handleAuth';

export type AppContainerType = {};

const AppContainer: React.FC<AppContainerType> = () => {
    const {
        authState: { result },
    } = React.useContext(AuthContext);

    const [isAuth, setAuth] = React.useState<boolean>(false);

    React.useEffect(() => {
        setAuth(requestAccessPermission());
    }, [result]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-rn_375px h-rn_600px">
                <BrowserRouter>
                    <Routes isAuth={isAuth} setAuth={setAuth} />
                </BrowserRouter>
            </div>
        </div>
    );
};

export default AppContainer;
