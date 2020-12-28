import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';

import Home from '../pages/home';
import Map from '../pages/map';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    );
};

export default AppRoutes;
