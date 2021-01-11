import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AuthProvider } from './src/context/auth';
import { ErrorProvider } from './src/context/errors';
import Routes from './src/routes';
import UserMenu from './src/components/UserMenu';
import { BussinesProvider } from './src/context/bussiness';

const App = () => {
    return (
        <ErrorProvider>
            <AuthProvider>
                <BussinesProvider>
                    <NavigationContainer>
                        <UserMenu swipeDirection="down" />
                        <Routes />
                    </NavigationContainer>
                </BussinesProvider>
            </AuthProvider>
        </ErrorProvider>
    );
};

export default App;
