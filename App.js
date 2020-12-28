import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AuthProvider } from './src/context/auth';
import { ErrorProvider } from './src/context/errors';
import Routes from './src/routes';

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
