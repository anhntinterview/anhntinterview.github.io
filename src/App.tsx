import * as React from 'react';
// COMPONENTS
import AppContainer from './AppContainer';
// CONTEXTS
import AuthProvider from './contexts/Auth/AuthProvider';
import SendingProvider from 'contexts/Sending/SendingProvider';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <SendingProvider>
                <AppContainer />
            </SendingProvider>
        </AuthProvider>
    );
};

export default App;
