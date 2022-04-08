import * as React from 'react';
// PACKAGE
import { Redirect, Route, useHistory } from 'react-router-dom';
import { SET_AUTH } from 'actions/auth.action';
// CONTEXT
import { AuthContext } from 'contexts/Auth/AuthContext';

// unauthenticated routes (redirect to home when authenticated)
const CommonRoute: React.ComponentType<any> = ({
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
            exact
            {...rest} // PROPS ITEM inside { ...rest } need inject to Component below
            render={(props) => {
                return isAuth ? (
                    <Redirect
                        to={{
                            pathname:
                                (props.location.state as { from: Location })
                                    ?.from?.pathname || '/',
                            state: { from: props.location },
                        }}
                    />
                ) : (
                    <Component {...props} setAuth={setAuth} />
                );
            }}
        />
    );
};

export default CommonRoute;
