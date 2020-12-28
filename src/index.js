import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AuthProvider } from './context/auth';
import { ErrorProvider } from './context/errors';
import Routes from './routes';

const App = () => {
    return (
        <NavigationContainer>
            <ErrorProvider>
                <AuthProvider>
                    <Routes />
                </AuthProvider>
            </ErrorProvider>
        </NavigationContainer>
    );
};

export default App;
