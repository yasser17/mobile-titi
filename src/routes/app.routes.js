import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';

import Home from '../pages/home';
import Map from '../pages/map';
import Request from '../pages/request'

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="BussinesRequest" component={Request} />
        </Stack.Navigator>
    );
};

export default AppRoutes;
