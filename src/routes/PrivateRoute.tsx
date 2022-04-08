import * as React from 'react';
// PACKAGE
import { Redirect, Route } from 'react-router';
// CONTEXT
import { AuthContext } from 'contexts/Auth/AuthContext';

// Requires authentication
const PrivateRoute: React.ComponentType<any> = ({
    path,
    isAuth,
    setAuth,
    component: Component,
    ...rest
}) => {
    const { authState, dispatch } = React.useContext(AuthContext);
    const { err } = authState;

    return (
        <Route
            path={path}
            {...rest}
            exact
            render={(props) => {
                return isAuth ? (
                    <Component {...props} isAuth={isAuth} setAuth={setAuth} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/locked',
                            state: { from: props.location },
                        }}
                    />
                );
            }}
        />
    );
};

export default PrivateRoute;
