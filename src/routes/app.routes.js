import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import Home from '../pages/home';
import Map from '../pages/map';
import Request from '../pages/request';
import { Menu } from '../assets/icons';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#052E64',
                },
                headerTitle: (
                    <Image
                        source={require('../assets/titi-logo.png')}
                        resizeMode="contain"
                        style={{ width: 200 }}
                    />
                ),
                headerRight: () => (
                    <TouchableOpacity style={{ marginRight: 10 }}>
                        <Menu />
                    </TouchableOpacity>
                )
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="BussinesRequest" component={Request} />
        </Stack.Navigator>
    );
};

export default AppRoutes;
