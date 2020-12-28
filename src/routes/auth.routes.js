import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Login from '../pages/login';
import Register from '../pages/register';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};

export default AuthRoutes;
